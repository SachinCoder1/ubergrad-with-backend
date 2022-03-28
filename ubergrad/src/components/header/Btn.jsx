import React from 'react'

function Btn({text}) {
  return (
    <div className='px-7 py-2 text-white rounded-3xl bg-orange-400 cursor-pointer mx-2'>
       {text}
    </div>
  )
}

export default Btn