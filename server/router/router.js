import express from 'express'
const router = express.Router()

import {authSystem} from '../controllers/auth.js'

router.get('/auth', authSystem)  
router.get('/notes', )

export default router