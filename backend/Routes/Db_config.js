import express from 'express'
import connection from '../Db.js'

const Configrouter = express.Router()

Configrouter.get('/', (req, res)=>{
    connection.execute('create database projectBuilder;', (err)=>{
        if(err){
            return console.error
        }
        return res.status(200)
    })
    connection.execute('use projectBuilder;', (err)=>{
        if(err){
            return console.error
        }
        
    })
    connection.execute('create table UserDetails( Id int primary key, Name varchar(20),Email varchar(20), Pno int, Passwd varchar(20) );', (err)=>{
        if(err){
            return console.error
        }
        
    })
    connection.execute('create table Pool( Proj_No int primary key,Name varchar(200),Desc_ varchar(200));', (err)=>{
        if(err){
            return console.error
        }
        
    })
    connection.execute('create table Project(Pno int, Uno int,PName varchar(20),primary key(Pno, Uno),tech int, type_ varchar(10));', (err)=>{
        if(err){
            return console.error
        }
        
    })
    connection.execute('create table Query(Qno int primary key, Uno int,Desc_ varchar(20), tech int,type_ varchar(10));', (err)=>{
        if(err){
            return console.error
        }
        
    })
    res.send('db creates').status(200)
})

export default Configrouter