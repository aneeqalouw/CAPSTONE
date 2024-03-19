import { connection as db } from "../config/index.js";

class Students {
  fetchStudents(req, res) {
    const qry = `
                SELECT Students.studID, Students.courseID,  Students.startDate, Courses.courseName
                FROM Students
                INNER JOIN Courses ON Students.courseID = Courses.courseID;
            `;
    db.query(qry, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }
  fetchStudent(req, res) {
    const qry = `
                SELECT Students.studID, Students.courseID,  Students.startDate, Courses.courseName
                FROM Students
                INNER JOIN Courses ON Students.courseID = Courses.courseID;
                WHERE studID = ${req.params.id};
            `;
    db.query(qry, (err, result) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        result: result[0]
      });
    });
  }
 book(req, res){
    const qry = `
        INSERT INTO Students
        SET ?;
    `
    db.query(qry, [req.body], (err)=>{
        if(err) throw err
        res.json({
            status: res.statusCode,
            msg: 'Booked!'
        })
    })
}
  cancel(req, res) {
    const qry = `
                DELETE FROM Students
                WHERE studID = ${req.params.id};
            `;
    db.query(qry, (err) => {
      if (err) {
        res.json({
          status: res.statusCode,
          msg: "Could not cancel booking. Please try again later.",
        });
      } else {
        res.json({
          status: res.statusCode,
          msg: "Booking successfully canceled",
        });
      }
    });
  }
}

export{
    Students
}
