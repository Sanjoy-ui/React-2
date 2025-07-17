import React, { useState } from 'react'

function Github() {
    const [data , setData ] = useState({})
    fetch('https://api.github.com/users/Sanjoy-ui')
    .then(res => res.json())
    .then( res => setData(res))
  return (
    <div className='' >
        <div className='mx-auto px-5 py-14 text-center'>
           github followers :  {data.followers}
        </div>
    </div>
  )
}

export default Github