import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [credentials, setCredentials] = useState({ password: "", email: "" })
  const handleSubmit = async (e) => {
    e.preventDefault()
    const responce = await fetch("http://localhost:5000/api/loginuser", {
      method: 'POST',
      headers: {
        'content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    })
    const json = await responce.json()
    console.log(json)
  }

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value })
  }
  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label text-light">Email address</label>
          <input type="text" className="form-control" name='email' id="email" value={credentials.email} onChange={onChange} aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label text-light">Password</label>
          <input type="text" className="form-control" name='password' value={credentials.password} onChange={onChange} id="exampleInputPassword1" />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to={'/signup'} className='m-3 btn btn-danger'>I'm a new user</Link>
      </form>
    </div>
  )
}

export default Login