import { Router, Request, Response } from "express";
import { User, UserDocument } from "../../models/user";
import bcrypt = require("bcrypt");
import dotenv from "dotenv";
dotenv.config();

var jwt = require("jsonwebtoken");

const router: Router = Router();
const saltRounds: number = 10;
const secretKey: string = process.env.JWT_Key;

// SIGNUP
router.post("/signup", async (req: Request, res: Response): Promise<any> => {
  const { username, password, email, firstName, lastName } = req.body;

  try {
    const existingUser: UserDocument | null = await User.findOne({ email });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists, please log in!" });
    }

    // Hash the password
    const hashedPassword: string = await bcrypt.hash(password, saltRounds);

    // Create a new user instance with the hashed password
    const newUser: UserDocument = new User({
      username,
      email,
      password: hashedPassword,
      firstName,
      lastName,
    });

    // Save the user to the database
    await newUser.save();
    console.log("User saved to DB");

    // Return message to front end
    return res.status(200).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error creating user", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// LOGIN
router.post("/login", async (req: Request, res: Response): Promise<any> => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user: UserDocument | null = await User.findOne({ email });

    if (!user) {
      return res
        .status(401)
        .json({ message: "Credentials are not recognized" });
    }

    // Check if the password is correct
    const isPasswordValid: boolean = await bcrypt.compare(
      password,
      user.password
    );

    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ message: "Credentials are not recognized" });
    } else {
      // If the credentials are valid, generate a JWT
        const token: string = jwt.sign({ userId: user._id }, secretKey, {
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
router.get("/isLoggedIn", async (req: Request, res: Response): Promise<any> => {
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
router.post("/logout", async (req: Request, res: Response): Promise<void> => {
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

export default router;
