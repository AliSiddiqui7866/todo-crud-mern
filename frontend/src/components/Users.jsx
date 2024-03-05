import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Users = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001')
            .then(result => setUsers(result.data))
            .catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/deleteUser/' + id)
            .then(res => {
                window.location.reload()
                console.log(res)
            })
            .catch(err => console.log(err)
            )
    }

    return (
        <div className='flex justify-center'>
            <div className=" justify-center mt-3  items-center w-9/12 ">
                <div className="flex  justify-between items-center">
                    <div className="logo">
                        <img src={process.env.PUBLIC_URL + "/images/LOgo2.png"}alt="" />
                    </div>
                    <div class='   rounded-lg '>
                        <div class=''>
                            <Link to='/create' class='group font-medium tracking-wide select-none text-base relative inline-flex items-center justify-center cursor-pointer h-12 border-2 border-solid py-0 px-6 rounded-xl overflow-hidden z-10 transition-all duration-300 ease-in-out outline-0 bg-gray-600 text-white hover:text-blue-500 focus:text-blue-500'>
                                <strong class='font-medium'>Add Deails</strong>
                                <span class='absolute bg-white bottom-0 w-0 left-1/2 h-full -translate-x-1/2 transition-all ease-in-out duration-300 group-hover:w-[105%] -z-[1] group-focus:w-[105%]'></span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className=" ">
                    <table className=" mt-3 w-full  bg-gray-600 shadow-md rounded-xl">

                        <thead className=''>
                            <tr className=" text-white text-xl">
                                <th className="py-3 px-4 text-left">Name</th>
                                <th className="py-3 px-4 text-left">Email</th>
                                <th className="py-3 px-4 text-left">City</th>
                                <th className="py-3 px-4 ">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-blue-gray-900">
                            {
                                users.map((user) => {
                                    return <tr className="border-b border-blue-gray-200">
                                        <td className="py-3 text-white px-4">{user.name}</td>
                                        <td className="py-3 text-white px-4">{user.email}</td>
                                        <td className="py-3 text-white px-4">{user.city}</td>
                                        <td className="py-3 text-white px-4 text-center">
                                            <Link className='border-2 rounded-md me-1 px-2 py-1 bg-lime-600' to={`/update/${user._id}`}>Edit</Link>
                                            <button className='border-2 rounded-md px-2 py-1 bg-red-500' onClick={(e) => handleDelete(user._id)}>Delete</button>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Users
