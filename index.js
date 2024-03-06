import { userRouter, express } from "./controller/usersController.js"; 
import { courseRouter } from "./controller/coursesController.js";
import { studentRouter } from "./controller/studentsController.js";
import { errHandling } from "./middleware/errorHandling.js";
import cookieParser from "cookie-parser";
import cors from 'cors';
import path from 'path';

const app = express()
const PORT = +process.env.PORT || 1200

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Request-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "Authorization");
    next();
})
app.use(
    express.static('./public'),
    cors(),
    express.json(),
    express.urlencoded({
        extended: true,
    }),
    cookieParser()
)

app.get('^/$|/abroadacademy', (req, res)=>{
    res.statusCode(200).sendFile(path.join(__dirname, './public/index.html'))
})


app.use('/users', userRouter)
app.use('/courses', courseRouter)
app.use('/students', studentRouter)
app.use(errHandling)

app.listen(PORT, ()=>{
    console.log(`Server is running on port number: ${PORT}`);
})