import { MenuData, specializationData, requirementData } from "../data/Data.js"

export const menuData = async (req, res) => {
    try {
        let data = await MenuData
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const specialData = async (req, res) => {
    try {
        let data = await specializationData
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
}
export const requirementDatas = async (req, res) => {
    try {
        let data = await requirementData
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
}

