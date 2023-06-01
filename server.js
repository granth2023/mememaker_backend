
import express from 'express'
const app = express()
const port = 2000;
import router from './Routes/user.routes.js'
app.get('/', (req, res) => {
    res.send('Hello, world!');
  });

  app.use('/memes', router);

import {createMemesJSON} from '/Users/gsh/code/unit2/project2/mememaker_backend/DB/newfirstseed.js'
// import {submissionsData} from '../mememaker_backend/DB/newfirstseed.js'

// Database and data
import db from '../mememaker_backend/DB/connection.js'
//import datas from '../mememaker_backend/Data/datas.json' assert {type: 'json'}


db.on('connected', async () => {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
createMemesJSON()
.then((response) => {
  console.log('Memes created successfully:', response);
})
  submissionsData()
        .then((response)=> {
          console.log('Submissions created successfully: ', response)
        })
    
})

//why does the folder come up as tests and datas? also why on compass. 
//need routes, controllers, second model, then i need all front end. 



app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });