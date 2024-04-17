import express from 'express'
import cors from 'cors'
import connection from './Db.js'
import UserRouter from './Routes/User.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/user', UserRouter)

app.get('/', (req, res)=>{
    connection.query('desc userdetails', (err, result)=>{
        if (err){
            return res.status(401).json({
                "msg":"Error in querying"
            })
        }
        res.status(200).send(result)
    })
})

app.listen(5555)