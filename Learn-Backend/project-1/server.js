const express = require('express')
const app = express()
const PORT = 8383
const data = ['apples']
app.use(express.json())

app.get('/',(req,res)=>{
    res.send(`
        <h1>Homepage</h1>
        <p>${data}</p>
        `)
})

app.get('/api/data',(req,res)=>{
    res.send(data)
})

app.post('/api/data', (req,res)=>{
    const newEntry = req.body
    data.push(newEntry.name)
    res.sendStatus(201)
})

app.delete('/api/data',(req,res)=>{
    data.pop()
    console.log("data popped")
    res.sendStatus(203)
})
app.listen(PORT, () => {console.log(`Server has started at ${PORT}`)}) 