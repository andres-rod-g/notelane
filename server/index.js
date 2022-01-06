import express from "express";
import cors from 'cors'
import router from './router/router.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded()); 

app.get('/', (req, res) => {
    res.send('Hola :)')
})
app.use('/api', router)

const PORT = process.env.PORT || 5000

app.get('/test', (req, res) => {
    res.json({test: 'test'})
})

mongoose.connect( process.env.IRL, { useNewUrlParser: true, useUnifiedTopology: true } )
    .then( () => app.listen(process.env.PORT || 5000) )
    .catch( (err) => console.log( err.message ) );

