import express from 'express'
import connection from '../Db.js'

const Configrouter = express.Router()

Configrouter.get('/', (req, res)=>{
    connection.execute('create database projectbuilder;', (err)=>{
        if(err){
            return console.error
        }
    })
    connection.execute('use projectbuilder;', (err)=>{
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
    // res.send('tables created')
    // connection.execute("INSERT INTO pool (Proj_no, Name, Desc_) VALUES (101, 'SmartApp', 'Mobile application for smart devices');\
    // INSERT INTO pool (Proj_no, Name, Desc_) VALUES (102, 'DataGuard', 'Data security platform for enterprises');\
    // INSERT INTO pool (Proj_no, Name, Desc_) VALUES (103, 'NetBoost', 'Network optimization software');\
    // INSERT INTO pool (Proj_no, Name, Desc_) VALUES (104, 'CyberShield', 'Cybersecurity solution for small businesses');\
    // INSERT INTO pool (Proj_no, Name, Desc_) VALUES (105, 'EcoSaver', 'Energy-saving IoT devices');\
    // INSERT INTO pool (Proj_no, Name, Desc_) VALUES (106, 'CloudGenius', 'Cloud computing consultancy services');\
    // INSERT INTO pool (Proj_no, Name, Desc_) VALUES (107, 'HealthTrack', 'Health monitoring wearable technology');\
    // INSERT INTO pool (Proj_no, Name, Desc_) VALUES (108, 'AI Assist', 'Artificial intelligence-powered virtual assistant');\
    // INSERT INTO pool (Proj_no, Name, Desc_) VALUES (109, 'CodeCraft', 'Integrated development environment for programmers');\
    // INSERT INTO pool (Proj_no, Name, Desc_) VALUES (110, 'RoboServe', 'Robotic process automation for customer service');\
    // INSERT INTO pool (Proj_no, Name, Desc_) VALUES (111, 'VR World', 'Virtual reality gaming platform');\
    // INSERT INTO pool (Proj_no, Name, Desc_) VALUES (112, 'BlockSecure', 'Blockchain-based data authentication system');\
    // INSERT INTO pool (Proj_no, Name, Desc_) VALUES (113, 'TechTrek', 'Online technology education platform');\
    // INSERT INTO pool (Proj_no, Name, Desc_) VALUES (114, 'CodeGuardian', 'Code review and analysis tool');\
    // INSERT INTO pool (Proj_no, Name, Desc_) VALUES (115, 'NanoTech', 'Nanotechnology research and development');\
    // INSERT INTO pool (Proj_no, Name, Desc_) VALUES (116, 'MindSync', 'Brain-computer interface technology');\
    // INSERT INTO pool (Proj_no, Name, Desc_) VALUES (117, 'FintechFocus', 'Financial technology innovation hub');\
    // INSERT INTO pool (Proj_no, Name, Desc_) VALUES (118, 'MediTech', 'Medical technology solutions provider');\
    // INSERT INTO pool (Proj_no, Name, Desc_) VALUES (119, 'EduTech', 'Educational technology startup');\
    // INSERT INTO pool (Proj_no, Name, Desc_) VALUES (120, 'GreenTech', 'Environmentally sustainable technology initiatives');", (err)=>{
    //     if(err){
    //         return console.error
    //     }
    // })
    // connection.execute("INSERT INTO project (Pno, Uno, PName, tech, type_) VALUES (101, 201, 'SmartApp', b'110011', 'desktop');\
    // INSERT INTO project (Pno, Uno, PName, tech, type_) VALUES (102, 202, 'DataGuard', b'101010', 'web');\
    // INSERT INTO project (Pno, Uno, PName, tech, type_) VALUES (103, 203, 'NetBoost', b'111100', 'desktop');\
    // INSERT INTO project (Pno, Uno, PName, tech, type_) VALUES (104, 204, 'CyberShield', b'010101', 'web');\
    // INSERT INTO project (Pno, Uno, PName, tech, type_) VALUES (105, 205, 'EcoSaver', b'001111', 'desktop');\
    // INSERT INTO project (Pno, Uno, PName, tech, type_) VALUES (106, 206, 'CloudGenius', b'110000', 'web');\
    // INSERT INTO project (Pno, Uno, PName, tech, type_) VALUES (107, 207, 'HealthTrack', b'100110', 'desktop');\
    // INSERT INTO project (Pno, Uno, PName, tech, type_) VALUES (108, 208, 'AI Assist', b'011001', 'web');\
    // INSERT INTO project (Pno, Uno, PName, tech, type_) VALUES (109, 209, 'CodeCraft', b'010010', 'desktop');\
    // INSERT INTO project (Pno, Uno, PName, tech, type_) VALUES (110, 210, 'RoboServe', b'101101', 'web');\
    // INSERT INTO project (Pno, Uno, PName, tech, type_) VALUES (111, 211, 'VR World', b'001100', 'desktop');\
    // INSERT INTO project (Pno, Uno, PName, tech, type_) VALUES (112, 212, 'BlockSecure', b'110101', 'web');\
    // INSERT INTO project (Pno, Uno, PName, tech, type_) VALUES (113, 213, 'TechTrek', b'111010', 'desktop');\
    // INSERT INTO project (Pno, Uno, PName, tech, type_) VALUES (114, 214, 'CodeGuardian', b'010110', 'web');\
    // INSERT INTO project (Pno, Uno, PName, tech, type_) VALUES (115, 215, 'NanoTech', b'100101', 'desktop');\
    // INSERT INTO project (Pno, Uno, PName, tech, type_) VALUES (116, 216, 'MindSync', b'001010', 'web');\
    // INSERT INTO project (Pno, Uno, PName, tech, type_) VALUES (117, 217, 'FintechFocus', b'110100', 'desktop');\
    // INSERT INTO project (Pno, Uno, PName, tech, type_) VALUES (118, 218, 'MediTech', b'011011', 'web');\
    // INSERT INTO project (Pno, Uno, PName, tech, type_) VALUES (119, 219, 'EduTech', b'101001', 'desktop');\
    // INSERT INTO project (Pno, Uno, PName, tech, type_) VALUES (120, 220, 'GreenTech', b'000111', 'web');", (err)=>{
    //     if(err){
    //         return console.error
    //     }
    // })
    // connection.execute("INSERT INTO userdetails (id, Name, email, Pno, passwd) VALUES (1, 'John Doe', 'john@example.com', 101, 'password1');\
    // INSERT INTO userdetails (id, Name, email, Pno, passwd) VALUES (2, 'Alice Smith', 'alice@example.com', 102, 'password2');\
    // INSERT INTO userdetails (id, Name, email, Pno, passwd) VALUES (3, 'Bob Johnson', 'bob@example.com', 103, 'password3');\
    // INSERT INTO userdetails (id, Name, email, Pno, passwd) VALUES (4, 'Emily Brown', 'emily@example.com', 104, 'password4');\
    // INSERT INTO userdetails (id, Name, email, Pno, passwd) VALUES (5, 'Michael Wilson', 'michael@example.com', 105, 'password5');\
    // INSERT INTO userdetails (id, Name, email, Pno, passwd) VALUES (6, 'Sophia Martinez', 'sophia@example.com', 106, 'password6');\
    // INSERT INTO userdetails (id, Name, email, Pno, passwd) VALUES (7, 'Daniel Anderson', 'daniel@example.com', 107, 'password7');\
    // INSERT INTO userdetails (id, Name, email, Pno, passwd) VALUES (8, 'Olivia Taylor', 'olivia@example.com', 108, 'password8');\
    // INSERT INTO userdetails (id, Name, email, Pno, passwd) VALUES (9, 'James Thomas', 'james@example.com', 109, 'password9');\
    //  INSERT INTO userdetails (id, Name, email, Pno, passwd) VALUES (10, 'Emma Jackson', 'emma@example.com', 110, 'password10');\
    //  INSERT INTO userdetails (id, Name, email, Pno, passwd) VALUES (11, 'William White', 'william@example.com', 111, 'password11');\
    //  INSERT INTO userdetails (id, Name, email, Pno, passwd) VALUES (12, 'Sophie Harris', 'sophie@example.com', 112, 'password12');\
    //  INSERT INTO userdetails (id, Name, email, Pno, passwd) VALUES (13, 'Matthew King', 'matthew@example.com', 113, 'password13');\
    //  INSERT INTO userdetails (id, Name, email, Pno, passwd) VALUES (14, 'Ava Lee', 'ava@example.com', 114, 'password14');\
    //  INSERT INTO userdetails (id, Name, email, Pno, passwd) VALUES (15, 'Ethan Garcia', 'ethan@example.com', 115, 'password15');\
    //  INSERT INTO userdetails (id, Name, email, Pno, passwd) VALUES (16, 'Amelia Miller', 'amelia@example.com', 116, 'password16');\
    //  INSERT INTO userdetails (id, Name, email, Pno, passwd) VALUES (17, 'Mason Wilson', 'mason@example.com', 117, 'password17');\
    //  INSERT INTO userdetails(id, Name, email, Pno, passwd) VALUES (18, 'Isabella Thompson', 'isabella@example.com', 118, 'password18');\
    //  INSERT INTO userdetails (id, Name, email, Pno, passwd) VALUES (19, 'Alexander Clark', 'alexander@example.com', 119, 'password19');\
    //  INSERT INTO userdetails (id, Name, email, Pno, passwd) VALUES (20, 'Mia Lewis', 'mia@example.com', 120, 'password20');", (err)=>{
    //     if(err){
    //         return console.error
    //     }
    //  })
    // res.send('added').status(200)
})

export default Configrouter