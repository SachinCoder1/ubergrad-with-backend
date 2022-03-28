import React from 'react'

function Box({text}) {
  return (
    <div className='px-5 py-5 min-w-[250px] text-center font-semibold text-lg rounded-md bg-white'>{text}</div>
  )
}

export default Box