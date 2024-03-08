import bodyParser from "body-parser";
import { verifyToken } from "../middleware/userAuthenticate.js";
import { users } from "../model/index.js";
import express from "express";

const userRouter = express.Router()

userRouter.get('/', verifyToken, (req, res)=>{
    try{
        users.fetchUsers(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve users'
        })
    }
})
userRouter.get('/:id', (req, res)=>{
    try{
        users.fetchUser(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve user'
        })
    }
})

userRouter.post('/register', bodyParser.json(),(req,res)=>{
    try{
        users.register(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Registration attempt unsuccessful'
        })
    }
})

userRouter.patch('/updateUser/:id', bodyParser.json(), (req, res)=>{
    try{
        users.updateUser(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to update user'
        })
    }
})

userRouter.delete('/deleteUser/:id', (req, res)=>{
    try{
        users.deleteUser(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to delete user'
        })
    }
})

userRouter.post('/login', bodyParser.json(), (req, res)=>{
    try{
        users.login(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'There was an error logging in'
        })
    }
})

export{
    userRouter,
    express
}