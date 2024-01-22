import React from 'react'
import { Typography } from 'antd'

const { Title } = Typography

const BlogPreview = ({ selectedBlog }) => {
  return (
    <div>
      <Title level={3}>{selectedBlog.title}</Title>
      <div
        style={{ height: 100 }}
        dangerouslySetInnerHTML={{
          __html: selectedBlog.blog,
        }}
      />
    </div>
  )
}

export default BlogPreview
