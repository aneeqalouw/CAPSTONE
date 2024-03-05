import { createPool } from "mysql";
import 'dotenv/config'

const connection = createPool({
    host: process.env.DB_HOST,
    database: process.env.DB_Name,
    user: process.env.DB_UserName,
    password: process.env.DB_Password,
    multipleStatements: true,
    connectionLimit: 30
})

export{
    connection
}