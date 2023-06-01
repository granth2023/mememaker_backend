import mongoose from 'mongoose'

const memeSchema = new mongoose.Schema({
      id: String,
      name: String,
      url: String,
      width: String,
      height: String,
      box_count: String
    })

const Meme = mongoose.model('Meme', memeSchema);

export default Meme; 