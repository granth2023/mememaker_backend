import Meme from '../Models/user.model.js';
import Submission from '../Models/another.model.js'

// Get all memes
const getMemes = async (req, res) => {
  try {
    const memes = await Meme.find();
    res.status(200).json(memes);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Get a single meme by ID
const getMemesById = async (req, res) => {
    try {
      const meme = await Meme.findById(req.params.id);
      if (!meme) {
        return res.status(404).json({ error: 'Meme not found' });
      }
      res.status(200).json(meme);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  };
  

const getSubmissions = async (req, res) => {
    try {
      const submissions = await Submission.find();
      res.status(200).json(submissions);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  };
  

  const getSubmissionById = async (req, res) => {
    try {
      const submission = await Submission.findById(req.params.id);
      if (!submission) {
        return res.status(404).json({ error: 'Submission not found' });
      }
      res.status(200).json(submission);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  };



//Create post for meme itself and submission? 

const createMeme = async (req, res) => {
    try {
      const meme = new Meme(req.body);
      await meme.save();
      res.status(201).json(meme);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  };

//this is create submission through backend, but how do i get it to respond to front end form fills? Do I need to worry about that? //front end needs to reference deployed backend and you need to do fetches on backend and once you get the response you get the data. 
  const createSubmission = async (req, res) => {
    try {
      const submission = await Submission.create(req.body);
      res.status(201).json(submission);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  };

  const updateMemeByID = async (req, res) => {
    try {
      const meme = await Meme.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!meme) {
        return res.status(404).json({ error: 'Meme not found' });
      }
      res.status(200).json(meme);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  };
  const updateSubmission = async (req, res) => {
    try {
      const updatedSubmission = await Submission.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
  
      if (!updatedSubmission) {
        return res.status(404).json({ error: 'Submission not found' });
      }
  
      res.status(200).json(updatedSubmission);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  };
  


  const deleteMeme = async (req, res) => {
    try {
      const meme = await Meme.findByIdAndDelete(req.params.id);
      if (!meme) {
        return res.status(404).json({ error: 'Meme not found' });
      }
      res.status(200).json({ message: 'Meme deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  };
  
    // Delete a submission by ID
    const deleteSubmission = async (req, res) => {
        try {
          const deletedSubmission = await Submission.findByIdAndDelete(req.params.id);
      
          if (!deletedSubmission) {
            return res.status(404).json({ error: 'Submission not found' });
          }
      
          res.status(200).json({ message: 'Submission deleted successfully' });
        } catch (error) {
          res.status(500).json({ error: 'Server error' });
        }
      };

export {getMemes, getMemesById, createMeme, updateMemeByID, deleteMeme, getSubmissions, getSubmissionById, createSubmission, updateSubmission, deleteSubmission};
