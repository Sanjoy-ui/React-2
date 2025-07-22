import React from 'react'

function 
SvgCards({title}) {
  return (
    <div>
        <div className='w-36  bg-slate-300 h-40 flex flex-col  rounded-sm  '>
            <div className='px-2  top-4 ' >
                logo
            </div>
            <div className='px-2  bottom-10 '>
                {title}
            </div>
        </div>
    </div>
  )
}

export default SvgCards
