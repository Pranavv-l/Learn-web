const express = require('express')
const app = express()
const PORT = 8383

app.get('/',(req,res)=>{
    res.sendStatus(200)
})

app.listen(PORT, () => {console.log(`Server has started at ${PORT}`)}) 