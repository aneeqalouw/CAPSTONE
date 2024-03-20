import { connection as db } from "../config/index.js";
import {hash, hashSync, compare} from 'bcrypt'
import { createToken } from "../middleware/userAuthenticate.js";

class Users{
    fetchUsers(req, res){
        const qry = `
            SELECT userID, firstName, lastName, email, userRole
            FROM Users;
        `
        db.query(qry, (err, results)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    fetchUser(req, res){
        const qry = `
            SELECT userID, firstName, lastName, email, userRole
            FROM Users
            WHERE userID ='${req.params.id}';
        `
        db.query(qry, (err, result)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                result
            })

        })
    }
    async register(req,res){
        let data = req.body
        data.pwd = await hash(data?.pwd, 8)
        let user = {
            email: data.email,
            pwd: data.pwd
        }
        const qry = `
            INSERT INTO Users
            SET ?;
        `
        db.query(qry, [data], (err)=>{
            if(err){
                throw err
            }else{
                let token = createToken(user)
                res.json({
                    status: res.statusCode,
                    token,
                    msg: 'Registered successfully'
                })
            }
        })
    }
    async updateUser(req, res){
        let data = req.body
        if(data?.pwd){
            data.pwd = await hash(data?.pwd, 8)
        }
        const qry = `
            UPDATE Users 
            SET ?
            WHERE userID = '${req.params.id}';
        `
        db.query(qry, [data], (err)=>{
            if(err){
                res.json({
                    status: res.statusCode,
                    msg: "Failed to update"
                })
            }else{
                res.json({
                    status: res.statusCode,
                    msg: 'Successfully updated'
                })
            }
        })
    }
    async deleteUser(req, res){
        const qry = `
            DELETE FROM Users
            WHERE userID = '${req.params.id}';
        `
        db.query(qry, (err)=>{
            if (err){
                res.json({
                    status: res.statusCode,
                    msg: 'Failed to delete user'
                })
            }else{
                res.json({
                    status: res.statusCode,
                    msg: 'Successfully deleted'
                })
            }
        })
    }
    login(req, res){
        const {email, pwd} = req.body
        const qry = `
            SELECT userID, firstName, lastName, email, pwd, userRole
            FROM Users
            WHERE email = '${email}';
        `
        db.query(qry, async(err, result)=>{
            if(err) throw err
            if(!result?.length){
                res.json({
                    status: res.statusCode,
                    msg: 'You provided the wrong email address'
                })
            }else{
                const validPassword = await compare(pwd, result[0].pwd)
                if(validPassword){
                    const token = createToken({
                        email,
                        pwd
                    })
                    res.json({
                        status: res.statusCode,
                        msg: 'Welcome back!',
                        token,
                        result: result[0]
                    })
                }else{
                    res.json({
                        status: res.statusCode,
                        msg: 'Incorrect password'
                    })
                }
            }
        })
    }
}

export{
    Users
}