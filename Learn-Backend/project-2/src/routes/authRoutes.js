import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import db from '../db.js'


const router = express.Router()

router.post('/register', (req,res) => {
    const {username,password} = req.body
    const hashedPass = bcrypt.hashSync(password,8)

    try {
        const insertUser = db.prepare(`INSERT INTO USERS (USERNAME, PASSWORD) VALUES (?,?)`)
        const result = insertUser.run(username,hashedPass)
        
        const defaultTodo = 'Drink Water'
        const insertTodo = db.prepare(`INSERT INTO TODOS (USER_ID, TASK) VALUES (?, ?)`)
        insertTodo.run(result.lastInsertRowid,defaultTodo)

        const token = jwt.sign({id:result.lastInsertRowid},process.env.JWT_SECRET,{expiresIn:'24h'})
        res.json({token})
    } catch (err) {
        console.log(err.message)
        res.sendStatus(503)
    }
})

router.post('/login', (req,res) => {
    const {username,password} =req.body
    try {
        const getUser = db.prepare('SELECT * FROM USERS WHERE USERNAME = ?')
        const user = getUser.get(username)

        if(!user){return res.status(404).send({message:'User not found'})}
        const passIsValid = bcrypt.compareSync(password,user.PASSWORD)
        if(!passIsValid){return res.status(401).send({message:'Incorrect password'})}
        console.log(user)
        const token = jwt.sign({id:user.ID},process.env.JWT_SECRET,{expiresIn:'24h'})
        res.json({token})

    } catch (error) {
        console.log(error.message)
        res.sendStatus(503)
    }
})

export default router