import React from 'react'

const Header = () => {
    return (
        <div className='absolute top-4 left-8 z-10' >
            <img src={import.meta.env.VITE_NETFLIX_LOGO} alt='Logo' 
            className="w-44"/>
        </div>
    )
}

export default Header