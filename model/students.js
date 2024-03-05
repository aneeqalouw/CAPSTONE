import { connection as db } from "../config/index.js";

class Students {
  fetchStudents(req, res) {
    const qry = `
                SELECT studID, courseID, userID
                FROM Students;
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
                SELECT studID, courseID, userID
                FROM Students
                WHERE studID =${req.params.id};
            `;
    db.query(qry, (err, result) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        result,
      });
    });
  }
  apply(req, res){
    const qry = `
        INSERT INTO Students
        SET ?;
    `
    db.query(qry, [req.body], (err)=>{
        if(err) throw err
        res.json({
            status: res.statusCode,
            msg: 'Applied successfully'
        })
    })
}
  async cancel(req, res) {
    const qry = `
                DELETE FROM Students
                WHERE studID = ${req.params.id}
            `;
    db.query(qry, (err) => {
      if (err) {
        res.json({
          status: res.statusCode,
          msg: "Could not cancel application. Please try again later.",
        });
      } else {
        res.json({
          status: res.statusCode,
          msg: "Application successfully canceled",
        });
      }
    });
  }
}
