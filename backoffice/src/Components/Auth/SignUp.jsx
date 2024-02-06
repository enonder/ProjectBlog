import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase.js'
import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input } from 'antd'

const SignUp = () => {
  const signUp = (e) => {
    console.log(e)
    createUserWithEmailAndPassword(auth, e.username, e.password)
      .then((userCredential) => {
        console.log(userCredential)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div
      style={{
        width: '400px',
        padding: '50px',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={signUp}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default SignUp
