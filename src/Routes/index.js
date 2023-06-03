import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => res.render('index'))
router.get('/Login', (req, res) => res.render('login'))
router.get('/Register', (req, res) => res.render('register'))
router.get('/Dashboard', (req, res) => res.render('dashboard'))

//URL not found
router.get('/qwerty', (req,res)=>res.render('404'))

export default router