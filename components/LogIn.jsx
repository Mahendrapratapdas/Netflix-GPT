import React from 'react'

const LogIn = () => {
    return (
        <div className='bg-black w-4/12 h-auto p-6 rounded-2xl opacity-90'>
            <h1 className='text-3xl text-white m-4 font-bold'>Sign In</h1>
            <form>
                <input type='text' placeholder='Enter username' className='bg-gray-500 p-2 w-full my-4' />
                <input type='password' placeholder='Enter password' className='bg-gray-500 p-2 w-full my-4' />
                <button className='bg-red-700 w-full my-4 h-10 rounded-xl cursor-pointer'>Submit</button>
            </form>
        </div>
    )
}

export default LogIn