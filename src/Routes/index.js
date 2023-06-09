import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => res.render('index'))
router.get('/Login', (req, res) => res.render('login'))
router.get('/Register', (req, res) => res.render('register'))
router.get('/Dashboard', (req, res) => res.render('dashboard'))
router.get('/Perfil', (req, res) => res.render('perfil-usuario'))
router.get('/listadousuarios', (req, res) => res.render('listadousuarios'))
router.get('/perfilpaciente', (req, res) => res.render('perfilpaciente'))
router.get('/creareventos', (req, res) => res.render('creareventos'))

//URL not found
router.get('/qwerty', (req,res)=>res.render('404'))

export default router