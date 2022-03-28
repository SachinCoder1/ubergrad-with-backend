import React, {useState, useEffect} from 'react'
import Title from '../Title'
import Box from './Box'
import { requirementData } from '../../../api/Api'

function Requirements() {

    const [data, setdata] = useState([])


    useEffect(() => {
        const getData = async () => {
            const newData = await requirementData()
            setdata(newData)
        }

        getData()
    }, [])

    return (
        <div className='flex flex-col items-center py-7'>
            <Title title="Requirements" />
            {
                data?.map((item, index) => <Box key={item+index} title={item.title} information={item.information} />)
            }
        </div>
    )
}

export default Requirements