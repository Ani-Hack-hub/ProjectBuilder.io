//sidd work

import express from 'express'
import { getTestimonals, getTestimonal, createTestimonal } from './database.js'

const testRouter = express.Router()

testRouter.use(express.json())

testRouter.get("/test", async(req,res)=>{
    const tests = await getTestimonals()
    res.send(tests)
})

testRouter.get("/test/:uid", async (req,res)=>{
    const uid = req.params.uid
    const t = await getTestimonal(uid)
    res.send(t)
})

testRouter.post("/test", async(req,res)=>{
    const {uid,star,review} = req.body
    const create = await createTestimonal(uid,star,review)
    res.status(201).send(create)
})

testRouter.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).send('Broke')
})

export default testRouter