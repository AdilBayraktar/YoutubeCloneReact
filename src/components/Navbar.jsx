import React, { useEffect, useState } from 'react'
import icons from '../assets/icons'
import imgs from '../assets/imgs/imgs'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const Navbar = () => {
    const { toggle } = useSelector(state => state.toggle)
    // const sideMenu = document.getElementById('sidenav')
    const dispatch = useDispatch()

    useEffect(() => {
        // if (toggle) {
        //     sideMenu.style.display = 'block'
        // }
        // else {
        //     sideMenu.style.display = 'none'
        // }

    }, [])
    // console.log(toggle)

    return (
        <div className='w-full flex items-center justify-between h-20 px-3'>
            <div className='flex w-3/12 items-center space-x-4'>
                <icons.menu className='icon' onClick={() => dispatch({ type: 'TOGGLE', payload: !toggle })} />
                <Link to={'/'}>
                    <img src={imgs.youtubeLogo} className='w-28' alt="logo" />
                </Link>
            </div>
            <div className='w-6/12 flex items-center space-x-4'>
                <div className='w-3/4 flex items-center'>
                    <input className='outline-none border p-2 h-10 flex-1 ' type="text" placeholder='Search' id="" />
                    <div className='flex bg-gray-100 h-10 items-center cursor-pointer w-20 justify-center border'><icons.search className='mx-2' /></div>
                </div>
                <div className='w-10 h-10 rounded-full bg-gray-100 flex items-center cursor-pointer justify-center'>
                    <icons.microphone className='icon' />
                </div>
            </div>
            <div className='w-3/12 flex items-center justify-end space-x-5'>
                <icons.videoPlus className='icon text-2xl' />
                <icons.notificaton className='icon text-2xl' />
                <div className='w-10 h-10 bg-gray-200 rounded-full'></div>
            </div>
        </div>
    )
}

export default Navbar