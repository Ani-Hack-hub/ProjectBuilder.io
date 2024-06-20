// sidd work

import express from 'express'
import { getQueries, getQuery, createQuery } from './database.js'

const queryRouter = express.Router()

queryRouter.use(express.json())

queryRouter.get("/query", async(req,res)=>{
    const queries = await getQueries()
    res.send(queries)
})

queryRouter.get("/query/:uid", async (req,res)=>{
    const uid = req.params.uid
    const qu = await getQuery(uid)
    res.send(qu)
})

queryRouter.post("/query", async(req,res)=>{
    const {uid,pid,pname,tech,type_,status_} = req.body
    const create = await createQuery(uid,pid,pname,tech,type_,status_)
    res.status(201).send(create)
})

queryRouter.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).send('Broke')
})

export default queryRouter