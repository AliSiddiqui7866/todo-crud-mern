import React, { useState } from 'react'
import axios from "axios"
import {useNavigate} from 'react-router-dom'

const CreateUser = () => {

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [city, setCity] = useState()

  const navigate=useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/createUser", { name, email, city })
      .then(result => {
        console.log(result)
        navigate('/')
      })
      .catch(err => console.log(err))
  }

  return (

    <div className='flex items-center justify-center h-screen'>
      <div className="max-w-md w-full mx-auto p-8 bg-gray-800 rounded-md shadow-md form-container">
        <h2 className="text-2xl font-semibold text-white mb-6">User Detail</h2>
        <form onSubmit={Submit}>
          <div className="mb-4">
            <label for="name" className="block text-gray-300 text-sm font-bold mb-2">Name</label>
            <input type="text" id="name" required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
              onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="mb-4">
            <label for="email" className="block text-gray-300 text-sm font-bold mb-2">Email</label>
            <input type="email" id="email" required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
              onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-4">
            <label for="email" className="block text-gray-300 text-sm font-bold mb-2">City</label>
            <input type="text" id="city" required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
              onChange={(e) => setCity(e.target.value)} />
          </div>

          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
            Add
          </button>

        </form>
      </div>

    </div>
  )
}

export default CreateUser
