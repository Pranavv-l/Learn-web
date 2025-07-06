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

    res.sendStatus(201)
})

export default router