import React from 'react'
import Cards from './Cards'

function Hero() {
  return (
    <div className='flex flex-wrap mt-10 gap-4 justify-center '>
        <Cards item={"paccakes"} Rs={499}/>
        <Cards item={"Chicken Soup"} Rs={599}/>
        <Cards item={"MinesStrone Soup"} Rs={499}/>
        <Cards item={"paccakes"} Rs={499}/>
    </div>
  )
}

export default Hero