import { Card, Col, Flex, Space, Switch, Table, Typography } from 'antd';
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons';
import React, { useState } from 'react'

const { Title } = Typography;

const Blogs = () => {

  const [listDisplay, setListDisplay] = useState(false);

  const handleListDisplay = () => {
    setListDisplay(!listDisplay);
  }

  const dataSource = Object.entries(JSON.parse(localStorage.getItem("blogs"))).map(([title, data], index) => {return {key: index, title, createDate: data.createDate}});
  
  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Date',
      dataIndex: 'createDate',
      key: 'date',
    },
  ];

  return(
    <div>
      <Flex align='center' justify='space-between'>
        <Title level={3}>BLOGS</Title>
        <Space direction='vertical'>
          <Switch checkedChildren={<AppstoreOutlined />}
                  unCheckedChildren={<BarsOutlined />}
                  style={{backgroundColor:'gray'}}
                  onClick={handleListDisplay}/>
        </Space>
      </Flex>
      <div>
        {!listDisplay && <Flex wrap='wrap'>
        {
        JSON.parse(localStorage.getItem("blogs")) 
        && Object.entries(JSON.parse(localStorage.getItem("blogs"))).map(([title, data], index) => 
        <Col key={index} span={6}>
          <Card title={title} style={{margin:'10px'}} hoverable='true'>
            <div style={{height:100}} dangerouslySetInnerHTML={{ __html: data.blog }} />
          </Card>
          </Col>
          )
        } 
        </Flex>}
        {listDisplay && 
         <Table dataSource={dataSource} columns={columns}
        />}
      </div>
    </div>
  )
}

export default Blogs;