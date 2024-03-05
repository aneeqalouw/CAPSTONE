import bodyParser from "body-parser";
import { verifyToken } from "../middleware/userAuthenticate.js";
import { users } from "../model/index.js";
import express from "express";

const userRouter = express.Router()

userRouter.get('/', (req, res)=>{
    try{
        users.fetchUsers(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve users'
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


