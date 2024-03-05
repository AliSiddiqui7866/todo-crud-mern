import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';



const UpdateUser = () => {
    const { id } = useParams();

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [city, setCity] = useState()
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3001/getUser/' + id)
            .then(result => {
                setName(result.data.name)
                setEmail(result.data.email)
                setCity(result.data.city)
                console.log(result)
            })
            .catch(err => console.log(err))
    }, [])

    const Update = (e) => {
        e.preventDefault();
        axios.put("http://localhost:3001/updateUser/" + id, { name, email, city })
            .then(result => {
                console.log(result)
                navigate('/')
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='flex items-center justify-center h-screen'>
            <div className="max-w-md w-full mx-auto p-8 bg-gray-800 rounded-md shadow-md form-container">
                <h2 className="text-2xl font-semibold text-white mb-6">Update User Details</h2>
                <form onSubmit={Update}>
                    <div className="mb-4">
                        <label for="name" className="block text-gray-300 text-sm font-bold mb-2">Name</label>
                        <input type="text" onChange={(e) => setName(e.target.value)} id="name" value={name} required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white" />
                    </div>
                    <div className="mb-4">
                        <label for="email" className="block text-gray-300 text-sm font-bold mb-2">Email</label>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} id="email" value={email} required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white" />
                    </div>
                    <div className="mb-4">
                        <label for="email" className="block text-gray-300 text-sm font-bold mb-2">City</label>
                        <input type="text" onChange={(e) => setCity(e.target.value)} id="city" required value={city} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white" />
                    </div>

                    <button type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
                        Update
                    </button>

                </form>
            </div>

        </div>
    )
}

export default UpdateUser
