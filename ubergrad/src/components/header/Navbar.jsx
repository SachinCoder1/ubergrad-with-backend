import React from 'react'
import Btn from './Btn'
import Logo from './Logo'
import Menu from './Menu'


function Navbar() {
    return (
        <div className='relative py-3 px-4 flex flex-col sm:flex-row items-center justify-between bg-yellow-300'>
            <Logo />
            <Menu />
            <div className='flex'>
                <Btn text="Store" />
                <Btn text="Talk to counsellor" />
            </div>
            <div className='font-semibold flex gap-x-2 '>
                <p className='cursor-pointer'>Login</p>
                <p className='cursor-pointer'>Signup</p>
            </div>
        </div>
    )
}

export default Navbar