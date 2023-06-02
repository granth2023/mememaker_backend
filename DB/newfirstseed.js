



import axios from 'axios';
// import { writeFile } from 'fs/promises';
import path from 'path';
import Meme from '../Models/user.model.js';
import Submission from '../Models/another.model.js';
import db from './connection.js'


// const __dirname = path.resolve(path.dirname(''));

export const createMemesJSON = async () => {
    try {
      const response = await axios.get('https://api.imgflip.com/get_memes');
      console.log('response       ',response)
      const responseData = Array.from(response.data.data.memes);
      console.log('responseData',      responseData)
  
      const seedData = responseData.map((object) => ({
        name: object.name,
        url: object.url,
        width: object.width,
        height: object.height,
        box_count: object.box_count,
        caption: object.caption,
      }));
      console.log('seedData',         seedData)
  
      await Meme.deleteMany({});
      const createdMemes = await Meme.create(seedData);
      console.log('Successfully created memes:', createdMemes);
      return createdMemes;
    } catch (error) {
      console.error('Error creating memes:', error);
      throw error; // Throw the error to be caught in the .catch() block
    }
  };

  createMemesJSON()

  export const submissionsData = async () => {
    for (let submission in Submission) {
      try {
        await Submission.create({
          meme: Submission[submission].meme,
          dataCreated: Submission[submission].dataCreated,
          bottomText: Submission[submission].bottomText,
          topText: Submission[submission].topText
        });
        console.log('Submission created successfully:', Submission[submission]);
      } catch (error) {
        console.error('Error creating submission:', error);
      }
    }
  };

  // submissionsData();