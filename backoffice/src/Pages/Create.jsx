import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { Button, Flex, Input } from 'antd'
import * as dayjs from 'dayjs'

const Create = () => {
  const [blog, setBlog] = useState('')
  const [title, setTitle] = useState('')

  const handleSave = () => {
    var createDate = dayjs().format('M/D/YYYY h:mm A')
    const prevBlogs = JSON.parse(localStorage.getItem('blogs'))
    const newBlogs = {
      ...prevBlogs,
      [title]: { blog, createDate },
    }
    localStorage.setItem('blogs', JSON.stringify(newBlogs))
    setTitle('')
    setBlog('')
  }

  return (
    <div style={{ height: '90%' }}>
      <Flex gap="middle" vertical style={{ height: '90%' }}>
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <ReactQuill
          style={{ height: '100%', paddingBottom: 50 }}
          theme="snow"
          value={blog}
          onChange={setBlog}
        />
      </Flex>
      <Button type="primary" onClick={handleSave}>
        Save
      </Button>
    </div>
  )
}

export default Create
