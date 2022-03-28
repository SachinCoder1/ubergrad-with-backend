import axios from 'axios'
const url = "http://localhost:8000"


export const menuData = async () => {
    const { data } = await axios.get(`${url}/menu`)
    return data
}
export const specialData = async () => {
    const { data } = await axios.get(`${url}/special`)
    return data
}
export const requirementData = async () => {
    const { data } = await axios.get(`${url}/requirements`)
    return data
}