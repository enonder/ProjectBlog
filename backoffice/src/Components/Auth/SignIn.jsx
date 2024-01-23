import { signInWithEmailAndPassword } from 'firebase/auth'
import React from 'react'
import { useState } from 'react'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signIn = () => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div>
      <form onSubmit={signUp}>
        <h1>Sign In</h1>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  )
}

export default SignIn
