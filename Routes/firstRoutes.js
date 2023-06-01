import express from 'express';
import getMemes from '../Controllers/user.controller.js'

const router = express.Router();
router.get('/memes', getMemes);


export default router 