import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase.js'
import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input } from 'antd'

const Login = () => {
  const login = (e) => {
    signInWithEmailAndPassword(auth, e.username, e.password)
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
        onFinish={login}
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
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a
            className="login-form-forgot"
            href=""
            style={{ marginLeft: '150px' }}
          >
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          <div style={{ marginBottom: '10px' }} />
          Or <a href="/signup">register now!</a>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login
