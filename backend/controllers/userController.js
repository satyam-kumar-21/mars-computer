import User from "../models/userModel.js";
import generateJwtToken from "../utils/generateJwtToken.js"

export const registerUser = async (req, res) => {
    const { name, email, password, isAdmin } = req.body;

    try {
        if (!name || !email || !password) {
            return res.status(400).json({ message: "Every field is required" });
        }

        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        const newUser = await User.create({
            name: name,
            email: email,
            password: password,
            isAdmin: isAdmin
        });

        return res.status(200).json({
            message: "User created successfully",
            newUser
        });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};


export const loginUser = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
  
      if (user && (await user.matchPassword(password))) {
        res.status(200).json({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,         
          token: generateJwtToken(user._id, user.isAdmin),
        });
      } else {
        res.status(404).json({
          message: "Email and password are incorrect",
          success: false,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Internal server error",
        success: false,
        error: error.message,
      });
    }
  };


