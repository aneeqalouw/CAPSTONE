import express from 'express';
import bodyParser from 'body-parser';
import { students } from '../model/index.js'; 
import { verifyToken } from '../middleware/userAuthenticate.js';

const studentRouter = express.Router()

studentRouter.get('/', (req, res)=>{
    try{
        students.fetchStudents(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve students'
        })
    }
})

studentRouter.get('/:id', (req, res)=>{
    try{
        students.fetchStudent(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve student'
        })
    }
})

studentRouter.post('/book', bodyParser.json(), verifyToken, (req, res)=>{
    try{
        students.book(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'An error occured when trying to book'
        })
    }
})

studentRouter.delete('/cancel/:id', (req, res)=>{
    try{
        students.cancel(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'An error occured when trying to cancel'
        })
    }
})

export{
    studentRouter
}