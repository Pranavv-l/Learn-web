import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import db from '../db.js'
import prisma from '../prismaClient.js'


const router = express.Router()

router.post('/register', async (req,res) => {
    const {username,password} = req.body
    const hashedPass = bcrypt.hashSync(password,8)

    try {
        const user = await prisma.user.create({
            data: {
                username,
                password: hashedPass
            }
        })
        const defaultTodo = 'Drink Water'
        const todo = await prisma.todo.create({
            data: {
                task: defaultTodo,
                userId:user.id
            }
        }) 
        

        const token = jwt.sign({id:user.id},process.env.JWT_SECRET,{expiresIn:'24h'})
        res.json({token})
    } catch (err) {
        console.log(err.message)
        res.sendStatus(503)
    }
})

router.post('/login', async (req,res) => {
    const {username,password} =req.body
    try {
        const user = await prisma.user.findUnique({
            where: {
                username
            }
        })

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