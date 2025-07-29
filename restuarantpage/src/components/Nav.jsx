import React from 'react'
import SvgCards from './SvgCards'

function Nav() {
  return (
    <div className='flex flex-wrap gap-6 justify-center mx-10 mt-20 px-20'>
         <SvgCards title={'All'}/>
     <SvgCards title={'Breakfast'}/>
     <SvgCards title={'Soup'}/>
     <SvgCards title={'Pasta'}/>
     <SvgCards title={'Main-course'}/>
     <SvgCards title={'Pizza'}/>
     <SvgCards title={'Burger'}/>
    </div>
  )
}

export default Nav