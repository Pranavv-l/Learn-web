import express from 'express'
import db from '../db.js'


const router = express.Router()

router.get('/',(req,res) => {
    const getTodos = db.prepare('SELECT * FROM TODOS WHERE USER_ID = ?')
    const todos = getTodos.all(req.userID)
    res.json (todos)
})
 
router.post('/',(req,res) => {
    const {task} = req.body
    const addTodos = db.prepare('INSERT INTO TODOS (USER_ID, TASK) VALUES (?, ?)')
    const result = addTodos.run(req.userID,task)
    res.json({id:result.lastInsertRowid,task,completed:0})
})

router.put('/:id',(req,res) => {
    const {completed} = req.completed
    const {id} = req.params

    const updated = db.prepare('UPDATE TODOS SET COMPLETED = ? WHERE USER_ID = ?')
    updated.run(completed,id)
    res.json({message:"Modified"})
})

router.delete('/:id', (req,res) => {
    const {id} = req.params
    const {userID} = req.body
    const deleted = db.prepare('DELETE FROM TODOS WHERE ID = ? AND USER_ID = ?')
    deleted.run(id, userID)

    res.send({ message: "Todo deleted" })
})
export default router