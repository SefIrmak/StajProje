import React from 'react'
import { Link } from 'react-router-dom'

export default function SignIn() {
  return (
    <div>
        
       <h1>Sign In</h1>

       <form>
        <input type="text" placeholder='Username' />
        <input type="text" placeholder='Password' />

        <p>Do you have an account? Log In <Link to="/login">here</Link></p>
        <button type='submit'>Sign In</button>
       </form>

    </div>
  )
}
