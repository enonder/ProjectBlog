import { Card } from 'antd';
import React from 'react'

const Blogs = () => {

  return(
    <div>
      <div>BLOGS</div>
      {
       JSON.parse(localStorage.getItem("blogs")) 
       && Object.entries(JSON.parse(localStorage.getItem("blogs"))).map(([title, blog]) => 
          <Card title={title} >{blog}</Card>
        )
      }
    </div>
  )
}

export default Blogs;