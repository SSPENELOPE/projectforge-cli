const router = require('express').Router();
const User = require('../../models/user');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config();

var jwt = require("jsonwebtoken");

const secretKey = process.env.JWT_KEY; // You must configure this in your .env file!!!

// SIGNUP
router.post("/signup", async (req, res) => {
  try {
    const existingUser = await User.findOne({
      where: { email: req.body.email },
    });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists, please log in!" });
    }

    // Create a new user instance using sequelize
    await User.create(req.body)

    // Save the user to the database
    console.log("User saved to DB");

    // Return message to front end
    return res.status(200).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error creating user", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({
      where: { email: email }
    });

    if (!user) {
      return res
        .status(401)
        .json({ message: "Credentials are not recognized" });
    }

    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(
      password,
      user.password
    );

    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ message: "Credentials are not recognized" });
    } else {
      // If the credentials are valid, generate a JWT
        const token = jwt.sign({ userId: user.id }, secretKey, {
        expiresIn: "1h", // Token expiration time
      });

      // Set the token in the response cookies, CHANGE THE NAME OF THE COOKIE YOU WANT TO USE
      res.cookie("YOUR-COOKIE", token, {
        httpOnly: true, // These cannot be accessed by javascript on the front end, create middlewear to handle the cookie parsing
        maxAge: 60 * 60 * 1000, // 1 hour in milliseconds
        secure: false, // Change this when pushing to prod
      });

      // Send a success message
      return res.status(200).json({ message: "Login successful" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// CHECK IF THE USER IS LOGGEDIN
router.get("/isLoggedIn", async (req, res) => {
  const token = req.cookies["YOUR-COOKIE"];
  if (token) {
    try {
      const decoded = jwt.verify(token, secretKey);
      res.status(200).json({ message: "You have access", user: decoded });
    } catch (err) {
      res.status(401).json({ message: "Invalid or expired token" });
    }
  } else {
    res.status(401).json({ message: "No token provided" });
  }
});

// LOGOUT
router.post("/logout", async (req, res) => {
  try {
      res.clearCookie("YOUR-COOKIE", {
        httpOnly: true,
        secure: false, // Change this when pushing to prod
      });

      res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    res.status(500).json({message: "Internal server error"})
  }
});

module.exports = router;
