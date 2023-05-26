import React from 'react'
import sidenavData from '../assets/data/sidenavData'

const SideNav = () => {
  return (
    <div className='max-w-[240px] p-2 space-y-3 border-r h-screen'>
      {
        sidenavData.map((item, i) => (
          <div key={i} className='max-w-[240px] flex space-x-5 items-center p-2 hover:bg-gray-200 transition cursor-pointer'>
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </div>
        ))
      }
    </div>
  )
}

export default SideNav