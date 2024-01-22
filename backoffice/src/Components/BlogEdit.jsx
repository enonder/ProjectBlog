import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { Button, Flex, Input } from 'antd'
import * as dayjs from 'dayjs'

const BlogEdit = ({ selectedBlog, setOpenPreview }) => {
  const [blog, setBlog] = useState('')
  const [title, setTitle] = useState('')

  const handleSave = () => {
    var updateDate = dayjs().format('M/D/YYYY h:mm A')
    const prevBlogs = JSON.parse(localStorage.getItem('blogs'))
    const newBlogs = {
      ...prevBlogs,
      [selectedBlog.title]: { ...selectedBlog, blog, updateDate },
    }
    localStorage.setItem('blogs', JSON.stringify(newBlogs))
    setOpenPreview(false)
    setTitle('')
    setBlog('')
    console.log(JSON.parse(localStorage.getItem('blogs')))
  }

  return (
    <div style={{ height: '90%' }}>
      <Flex gap="middle" vertical style={{ height: '90%' }}>
        <Input
          placeholder="Title"
          defaultValue={selectedBlog.title}
          onChange={(e) => setTitle(e.target.value)}
          disabled
        />
        <ReactQuill
          style={{ height: '100%', paddingBottom: 50 }}
          theme="snow"
          defaultValue={selectedBlog.blog}
          onChange={setBlog}
        />
      </Flex>
      <Button type="primary" onClick={handleSave}>
        Save
      </Button>
    </div>
  )
}

export default BlogEdit
