import Meme from '../Models/user.model.js';

// Get all memes
const getMemes = async (req, res) => {
  try {
    const memes = await Meme.find();
    res.status(200).json(memes);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};





export default getMemes
