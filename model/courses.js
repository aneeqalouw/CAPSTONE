import { connection as db } from '../config/index.js'

class Courses{
    fetchCourses(req, res){
        const qry = `
            SELECT courseID, courseName, courseDuration, courseDesc, coursePrice
            FROM Courses;
        `
        db.query(qry, (err, results)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    fetchCourse (req, res){
        const qry= `
            SELECT courseID, courseName, courseDuration, courseDesc, coursePrice
            FROM Courses
            WHERE courseID = '${req.params.id}';
        `
        db.query(qry, (err, result)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                result
            })
        })
    }
    addCourse(req, res){
        const qry = `
            INSERT INTO Courses
            SET ?;
        `
        db.query(qry, [req.body], (err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: 'Course added successfully'
            })
        })
    }
    updateCourse(req, res){
        const qry = `
            UPDATE Courses
            SET ?
            WHERE courseID = '${req.params.id}';
        `
        db.query(qry, [req.body], (err)=>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                msg: 'Course successfully updated'
            })
        })
    }
    deleteCourse(req, res){
        const qry = `
            DELETE FROM Courses
            WHERE courseID = '${req.params.id}';
        `
        db.query(qry, (err)=>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                msg: 'Course successfully deleted'
            })
        })
    }
}

export {
    Courses
}