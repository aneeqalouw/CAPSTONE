import express from 'express';
import bodyParser from 'body-parser';
import { courses } from '../model/index.js'; 

const courseRouter = express.Router()

courseRouter.get('/', (req, res)=>{
    try{
        courses.fetchCourses(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve courses'
        })
    }
})

courseRouter.get('/:id', (req, res)=>{
    try{
        courses.fetchCourse(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve course'
        })
    }
})

courseRouter.post('/addCourse', bodyParser.json(), (req, res)=>{
    try{
        courses.addCourse(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to add course'
        })
    }
})

courseRouter.patch('/updateCourse/:id', bodyParser.json(), (req, res)=>{
    try{
        courses.updateCourse(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to update course'
        })
    }
})

courseRouter.delete('/deleteCourse/:id', (req, res)=>{
    try{
        courses.deleteCourse(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to delete course'
        })
    }
})

export{
    courseRouter
}