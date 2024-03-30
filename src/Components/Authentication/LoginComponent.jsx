import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginComponent = () => {

  const Navigate = useNavigate();

  const [forms, setForms] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForms((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', forms);
    LoginView(e);
  };

  const LoginView = async (e) => {
    e.preventDefault()

    const response = await axios.post(`${import.meta.env.VITE_URL_SERVER}/auth/login/`, forms)
    console.log(response.data);
    Navigate('/')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-lg">
        <form onSubmit={LoginView} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <h1 className='text-4xl font-bold flex justify-center mb-6'>Sign In</h1>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email Address"
              onChange={handleChange}
              name="email"
              required
            />
          </div>
          <div className="mb-">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder='Password'
              onChange={handleChange}
              name='password'
              required
            />

          </div>
          <div className='flex justify-end mb-3'>
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              Forgot Password?
            </a>
          </div>
          <div className="flex items-center justify-between">
            <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleSubmit}>
              Sign In
            </button>
          </div>
          <div className='mt-4'>
            <a className="inline-block align-baseline font-bold text-sm" href="#">
              Don't have an account? <span onClick={() => Navigate('/register')} className=' text-blue-500 hover:text-blue-800'>Sign Up</span>
            </a>
          </div>
        </form>
      </div>

    </div>
  )
}

export default LoginComponent