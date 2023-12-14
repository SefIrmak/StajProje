import React from 'react'
import { Link } from 'react-router-dom'


export default function Login() {
  return (
    <div>
        
       <h1>Login</h1>

       <form>
        <input type="text" placeholder='Username' />
        <input type="text" placeholder='Password' />

        <p>Don't have an account? Sign In <Link to="/sign-in">here</Link></p>
        <button type='submit'>Log In</button>
       </form>

    </div>
  )
}
