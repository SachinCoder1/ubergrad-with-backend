import React from 'react'

function Box({ title, information }) {
    return (
        <div className='mx-5 flex flex-col sm:flex-row my-5 items-center sm:justify-center sm:gap-y-0 gap-y-3 gap-x-3 sm:my-1'>
            <div className='bg-gray-200 flex items-center justify-center rounded-lg px-5 sm:min-w-[200px] sm:px-2 text-center sm:max-w-[200px] font-semibold sm:min-h-[60px] sm:max-h-[60px]'>
                {title}
            </div>
            <div className='bg-gray-200 flex sm:items-center rounded-lg sm:min-w-[700px] px-3 py-2 sm:max-w-[700px] font-semibold min-h-[60px] sm:max-h-[60px]'>
                {information}
            </div>

        </div>
    )
}

export default Box