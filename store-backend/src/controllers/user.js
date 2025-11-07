// src/controllers/user.controller.js
export const getUserProfile = async (req, res) => {
    try {
      res.status(200).json({
        message: 'User profile fetched successfully',
        user: req.user, // from JWT decoded payload
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  export const updateUserProfile = async (req, res) => {
    try {
      // This is just a mock — in real life you'd update MongoDB here
      const updatedData = req.body;
      res.status(200).json({
        message: 'User profile updated successfully',
        updatedData,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  