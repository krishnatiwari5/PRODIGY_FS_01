import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";


const app = express();


app.use(cookieParser())
app.use(cors({
        origin : process.env.CORS_ORIGIN,
        credentials : true
    }))
     
    // app.use(cors())
    
    app.use(express.json());
    app.use(express.urlencoded({extended: true}))
    app.use(express.static("public"))




// routes import

import userRouter from "./routes/user.routes.js"


// routes declaration 

app.use("/api/v1/users", userRouter)

export default app; 