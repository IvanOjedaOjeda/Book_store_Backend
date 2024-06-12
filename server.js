import express from 'express'

import { db } from './src/config/db.config.js'

import dotenv from 'dotenv'


dotenv.config()

const app = express()


db()





app.listen(3000, () =>{
    console.log('Servidor corriendo en puerto 3000')
})
