import express from "express";
import { menuData, requirementDatas, specialData } from "../controller/data-controller.js";


const Router = express.Router()


Router.get('/menu', menuData)
Router.get('/special', specialData)
Router.get('/requirements', requirementDatas)


export default Router 