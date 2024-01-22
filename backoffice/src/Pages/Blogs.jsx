import {
  Button,
  Card,
  Col,
  Flex,
  Modal,
  Space,
  Switch,
  Table,
  Typography,
} from 'antd'
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import BlogPreview from '../Components/BlogPreview'
import BlogEdit from '../Components/BlogEdit'

const { Title } = Typography

const Blogs = () => {
  const [listDisplay, setListDisplay] = useState(false)
  const [openPreview, setOpenPreview] = useState(false)
  const [selectedBlog, setSelectedBlog] = useState()
  const [editBlog, setEditBlog] = useState(false)

  const dataSource = Object.entries(
    JSON.parse(localStorage.getItem('blogs'))
  ).map(([title, data], index) => {
    return {
      key: index,
      title,
      createDate: data.createDate,
      updateDate: data.updateDate,
    }
  })

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Create Date',
      dataIndex: 'createDate',
      key: 'createDate',
    },
    {
      title: 'Update Date',
      dataIndex: 'updateDate',
      key: 'updateDate',
    },
    {
      title: 'Creator',
      dataIndex: 'creator',
      key: 'creator',
    },
  ]

  const handleListDisplay = () => {
    setListDisplay(!listDisplay)
  }

  const handleDeleteBlog = (title) => {
    const storedBlogs = JSON.parse(localStorage.getItem('blogs'))
    delete storedBlogs[title]
    localStorage.setItem('blogs', JSON.stringify(storedBlogs))
    setOpenPreview(false)
  }

  return (
    <div>
      <Flex align="center" justify="space-between">
        <Title level={3}>BLOGS</Title>
        <Space direction="vertical">
          <Switch
            checkedChildren={<AppstoreOutlined />}
            unCheckedChildren={<BarsOutlined />}
            style={{ backgroundColor: 'gray' }}
            onClick={handleListDisplay}
          />
        </Space>
      </Flex>
      <div>
        {!listDisplay ? (
          <Flex wrap="wrap">
            {JSON.parse(localStorage.getItem('blogs')) &&
              Object.entries(JSON.parse(localStorage.getItem('blogs'))).map(
                ([title, data], index) => (
                  <Col key={index} span={6}>
                    <Card
                      title={title}
                      style={{ margin: '10px' }}
                      hoverable="true"
                      onClick={() => {
                        setOpenPreview(true)
                        setSelectedBlog({ title, ...data })
                        setEditBlog(false)
                      }}
                    >
                      <div
                        style={{ height: 100 }}
                        dangerouslySetInnerHTML={{
                          __html: data.blog,
                        }}
                      />
                    </Card>
                  </Col>
                )
              )}
          </Flex>
        ) : (
          <Table
            dataSource={dataSource}
            columns={columns}
            onRow={(record, rowIndex) => {
              return { onClick: () => setOpenPreview(true) }
            }}
          />
        )}

        <Modal
          centered
          open={openPreview}
          onCancel={() => setOpenPreview(false)}
          width={1000}
          footer={
            <>
              <Button
                key="delete"
                onClick={() => handleDeleteBlog(selectedBlog.title)}
              >
                Delete
              </Button>
              <Button key="edit" onClick={() => setEditBlog(true)}>
                Edit
              </Button>
            </>
          }
        >
          {editBlog ? (
            <BlogEdit
              selectedBlog={selectedBlog}
              handleDeleteBlog={handleDeleteBlog}
              setOpenPreview={setOpenPreview}
            />
          ) : (
            <BlogPreview selectedBlog={selectedBlog} />
          )}
        </Modal>
      </div>
    </div>
  )
}

export default Blogs
