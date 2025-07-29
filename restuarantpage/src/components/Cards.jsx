import React from 'react'

function Cards({item , Rs }) {
  return (
    <div className='w-64  h-50 bg-slate-200 h-64 rounded-md '>
        
            {/* <img className='w-full' src="https://www.google.com/search?q=image&oq=image&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIGCAEQRRhAMgoIAhAAGLEDGIAEMgoIAxAAGLEDGIAEMgoIBBAAGLEDGIAEMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEIMTAzOWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#vhid=oJyTuc83xs473M&vssid=_G9B_aNepOvWh1e8PucC84AM_51" alt="logo" /> */}
            <div className='bg-red-400 w-50 h-40 w-60 mt-2  rounded-md mx-auto'>
                logo
            </div>

            <div className='pl-2'>
                <h2 className='font-bold'>{item}</h2>
               <div className='flex justify-between '>
                 <p className='mt-3 text-green-600'>Rs {Rs}/-</p>
                 <p className='mt-3 pr-2 text-green-700 '>Veg</p>
               </div>
            </div>
            <button className='px-16 bg-green-400 hover:bg-green-600 mt-1 py-1  text-white font-semibold rounded-lg mx-auto block ' >
                Add to Dish
            </button>
    </div>
  )
}

export default Cards