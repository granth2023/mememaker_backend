import express from 'express'
const router = express.Router();

router.get('/', (req, res)=> {
    res.status(200).json({ message: 'Get goals'})
})

router.post('/', (req, res)=> {
    res.status(200).json({ message: 'Get goals'})
})

router.get('/', (req, res)=> {
    res.status(200).json({ message: 'Get goals'})
})

router.get('/', (req, res)=> {
    res.status(200).json({ message: 'Get goals'})
})

export default router


