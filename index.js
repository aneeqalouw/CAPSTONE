
// import {userRouter, express} from './controller/UserController.js'
// import { productRouter } from './controller/ProductController.js'
// import { config } from 'dotenv'
import cookieParser from 'cookie-parser'
// import {errHandling} from './middleware/ErrorHandling.js'
import cors from 'cors'
import path from 'path'
// config()


const app = express()
const port = +process.env.PORT || 4000

//middleware
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
    express.static('./static'),
    express.json(),
    express.urlencoded({
        extended: true,
    }),
    cookieParser(),
    cors()
)

app.get('^/$|/abroadacademy', (req, res)=>{
    res.statusCode(200).sendFile(path.join(__dirname, './static/index.html'))
})

app.use('/users', userRouter)
app.use('/products', productRouter)
app.use(errHandling)
app.listen(port, ()=>{
    console.log(`Server is running on port number: ${port}`);
})