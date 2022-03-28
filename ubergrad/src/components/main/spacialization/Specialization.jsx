import React, { useEffect, useState } from 'react'
import Title from '../Title'
import Box from './Box'
// import { specializationData } from '../../../data/Data'
import { specialData } from '../../../api/Api'

function Specialization() {
    const [data, setdata] = useState([])


    useEffect(() => {
        const getData = async () => {
            const newData = await specialData()
            setdata(newData)
        }

        getData()
    }, [])


    return (
        <div className='bg-gray-300 flex flex-col items-center space-y-10 pb-10'>
            <div className='flex flex-col items-center'>
                <Title title="Popular Specialization" />
                <p className='pl-2 text-sm'>Below are some popular specialization of computer science</p>
            </div>

            <div className='flex items-center justify-center  sm:justify-between gap-x-7 gap-y-8 flex-wrap max-w-[950px]'>
                {
                    data?.map((item, index) => <Box key={index + item} text={item} />)
                }
            </div>
        </div>
    )
}

export default Specialization