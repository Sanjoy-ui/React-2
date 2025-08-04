import React from 'react'
import '../assets/head.css'


function Header() {
  return (
    <>
        <nav className='bg-green-300 w-full h-16 flex justify-around items-center '>
            <div className='' >
                <h1 className='logo right-10 font-bold text-3xl  ' >LOGOmine</h1>
            </div>
            <div >
              <ul className=' ul list-none flex gap-2 font-semibold'>
                <li><a className='hover:bg-green-400 px-4 py-1.5 rounded-xl hover:shadow-lg' href="">Home</a></li>
                <li><a className='hover:bg-green-500 px-4 py-1.5 rounded-xl hover:shadow-lg' href="">Blog</a></li>
                <li><a className='hover:bg-green-500 px-4 py-1.5 rounded-xl hover:shadow-lg' href="">About</a></li>
                <li><a className='hover:bg-green-500 px-4 py-1.5 rounded-xl hover:shadow-lg' href="">Contact</a></li>
                <li><a className='burger hover:bg-green-500 px-4 py-1.5 rounded-xl hover:shadow-lg' href="">Menu</a></li>
                
              </ul>
              
            </div>
        </nav>
    </>
  )
}

export default Header