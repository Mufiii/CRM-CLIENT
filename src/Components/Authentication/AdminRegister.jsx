import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const AdminRegister = () => {

  const Navigate = useNavigate()
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirm_password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    AdminRegisterView(e); 
  };

  const AdminRegisterView = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(`${import.meta.env.VITE_URL_SERVER}/auth/register/`, form);
      console.log(response.data);
      Navigate('/login');
    } catch (error) {
      console.log(error.response);
      console.log(error.message);
      console.log(error);
    }
  }


  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-lg">
        <form onSubmit={AdminRegisterView} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <h1 className='text-4xl font-bold flex justify-center mb-5'>Sign Up</h1>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email Address"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="confirm_password"
              type="password"
              placeholder="Confirm Password"
              name="confirm_password"
              value={form.confirm_password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleSubmit}>
              Sign Up
            </button>
          </div>
          <div className='mt-4'>
            <a className="inline-block align-baseline font-bold text-sm" href="#">
              Already have an Account?<span onClick={()=>Navigate('/login')} className=' text-blue-500 hover:text-blue-800'> Login</span>
            </a>
          </div>
        </form>
      </div>

    </div>
  )
}

export default AdminRegister