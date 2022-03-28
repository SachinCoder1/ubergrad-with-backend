import React, {useState, useEffect} from 'react'
import { BsChevronDown } from 'react-icons/bs';
// import { MenuData } from '../../data/Data';
import { menuData } from '../../api/Api';

function Menu() {

    const [data, setdata] = useState([])


    useEffect(() => {
        const getData = async () => {
            const newData = await menuData()
            setdata(newData)
        }

        getData()
    }, [])

    return (
        <div className='flex sm:flex-row flex-col gap-x-3'>
            {
                data?.map((data, index) => {
                    return (
                        <p key={index+data} className='group cursor-pointer flex items-center gap-x-1'>
                            {data} <span className='group-hover:rotate-180 transition-all duration-200'><BsChevronDown /></span>
                        </p>
                    )
                })
            }
        </div>
    )
}

export default Menu