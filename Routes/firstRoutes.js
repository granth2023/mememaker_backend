import express from 'express';
import { getMemes, getMemesById, createMeme, updateMemeByID, deleteMeme, getSubmissions, getSubmissionById, createSubmission, updateSubmission, deleteSubmission} from '../Controllers/user.controller.js'
// import createMeme from '../Controllers/user.controller.js'

const router = express.Router();
//need get route for second model submissions-- 
//get submissions for specific meme, so based off meme reference, /memes/:memeID/submission  
router.get('/memes', getMemes);
router.get('/memes/:id', getMemesById);
router.get('/submissions', getSubmissions);
router.get('/submissions/:id', getSubmissionById);


//need post route for second model 
router.post('/memes', createMeme);
//front end: do a post request with axios, has to hit /submissions endpoint, include within request body, components of model and then a form where it is filled out and post request with that in there and takes those values and does that. --how to generate image? serach ideas for overlay, have references. 
router.post('/submissions', createSubmission);

//need put route for second model 
//submission/:submissionID 
router.put('/memes/:id', updateMemeByID);
router.put('/submissions/:id', updateSubmission);


router.delete('/memes/:id', deleteMeme);
router.delete('/submissions/:id', deleteSubmission);


//delete submission:    /submission/:submissionID 

//submissions: like comments on a post, memes is the post 

export default router 


//post routes/controllers: front end -- create that repo, put in the folder repo lives too, and 

//restful api --config file and services file and then merging --- handle 
//inside services, services for each backend to talk to front end --- services will have each method from controller---- create meme: inside services, create meme funciton   create meme async and thena  body for bottom text --- await api route . post to /memes,  inside post request send body 
//create specific route in services for posting text to image "get submissions for memes as a name of a services method "--->this method will take a memeID ---> don't worry about mulitple 
//add route in backend get Meme by ID 

//user would be a third model 

//FIRST THING: SET UP SERVICES AND API CONFIG --
// SERVICES: CLIENT FOLDER HTML/CSS/JS AND ANOTHER FOLDER CALLED SERVICES AND SERVICES.JS AND CONTROLLER
// SERVICES.JS METHODS FOR JAVASCRIPT SERVICES METHODS API 