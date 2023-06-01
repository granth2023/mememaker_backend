// import * as dotenv from 'dotenv';
// import mongoose from 'mongoose';


// //
// // import monarchs from '../data/monarchRaw.json' assert { type:'json' }
// import datas from 'mememaker_backend/Data/data.json' assert { type:'json' }
// // import Monarch from '../../models/Monarch.js';
// import get from '../user.model.js';


// //const monarchData = [];
// const getData = [];


// // json raw data, calling for each of them while singular json name passes through the iterator therefore the new variable holding an empty array is pushed to create the model where the keyvalue's are the parameter of this function at the values of the model. 

// //however it can be thrown in with the exporting function beneath so to combine, youll want to take the name of the functino and make it an empty object within the same function that has been renamed createMemesJSON that now awaits for axios 

// datas.forEach((data) => { 
//     getData.push(
//         {
//             id: number,
//       name: data.name,
//       url: data.url,
//       width: data.width,
//       height: data.height,
//       box_count: data.box_count,
//       captions: data.captions,
//       category: data.category,
//       bottomText: data.bottomText,
//       topText: data.topText,
//         }
//     )
// });

// //export a function held in a seedDatabase that is asynchronous, empty and therefore loops through the entire new array iterating up, takes your model and at it, creates using the new array at the variable i and console.log that you added at this new index of the new array


// export const seedDatabase = async () => {

//     for ( let i = 0; i < getData.length; i++){
//         get.create(getData[i])
//         console.log(`Hope this ${getData[i]} works.`)
//     }

// }

// //
// db.on('connected', async () => {
//     console.log(`Connected to MongoDB: name:${db.name} host:${db.host} port:${db.port}`);
//     await seedDatabase();
// })
