import React from 'react'
import { auth } from '../../firebase.js'
import { onAuthStateChanged, signOut } from 'firebase/auth'

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null)

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user)
      } else {
        setAuthUser(null)
      }
    })

    return () => {
      listen()
    }
  }, [])

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('signed out')
      })
      .catch((error) => console.log(error))
  }
  return (
    <div>
      {authUser ? (
        <div>
          <div> Signed in as ${auth.email}</div>
          <button onClick={signOut}>Sign Out</button>
        </div>
      ) : (
        <div>Signed Out!</div>
      )}
    </div>
  )
}

export default AuthDetails
