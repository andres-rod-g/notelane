import express from "express";
import cors from 'cors'

const app = express()

app.set('port', process.env.PORT || 5000)

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hola :)')
})

app.listen(console.log(app.get('port')))