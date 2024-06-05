const request = require("supertest");
const bcrypt = require("../../../__mocks__/bcrypt");
const User = require("../../../models/user");
const app = require("../../../server");
const dotenv = require("dotenv");
dotenv.config();
var jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_Key;

// Mock the User model
jest.mock("../../../models/user");

// Mock Bcrypt
jest.mock("bcrypt", () => ({
  hash: jest.fn().mockResolvedValue("hashedPassword"),
  compare: jest.fn(),
}));

// Mock JWT
jest.mock("jsonwebtoken", () => ({
  sign: jest.fn(),
  verify: jest.fn(),
}));

describe("User routes", () => {
  // LOGIN TEST
  describe("POST Login routes", () => {
    it("should login a user with valid credentials", async () => {
      const user = {
        id: "testUserId",
        email: "test@example.com",
        password: "hashedPassword",
      };

      // Mocking User.findOne to return the user
      User.findOne = jest.fn().mockResolvedValue(user);

      // Mocking bcrypt.compare to return true for password validation
      (bcrypt.compare).mockResolvedValue(true);

      // Mocking jwt.sign to return a token
      (jwt.sign).mockReturnValue("mockedToken");

      const response = await request(app).post("/user/auth/login").send({
        email: "test@example.com",
        password: "testpassword",
      });

      expect(response.status).toBe(200);
      expect(response.body.message).toBe("Login successful");
      expect(response.header["set-cookie"][0]).toContain("mockedToken");
    });

    it("should return 401 if user does not exist", async () => {
      // Mocking User.findOne to return null, indicating user doesn't exist
      User.findOne = jest.fn().mockResolvedValue(null);

      const response = await request(app).post("/user/auth/login").send({
        email: "nonexistent@example.com",
        password: "testpassword",
      });

      expect(response.status).toBe(401);
      expect(response.body.message).toBe("Credentials are not recognized");
    });

    it("should return 401 if password is incorrect", async () => {
      const user = {
        id: "testUserId",
        email: "test@example.com",
        password: "hashedPassword",
      };

      // Mocking User.findOne to return the user
      User.findOne = jest.fn().mockResolvedValue(user);

      // Mocking bcrypt.compare to return false for incorrect password
      (bcrypt.compare).mockResolvedValue(false);

      const response = await request(app).post("/user/auth/login").send({
        email: "test@example.com",
        password: "incorrectpassword",
      });

      expect(response.status).toBe(401);
      expect(response.body.message).toBe("Credentials are not recognized");
    });
  });

  // SIGNUP TEST
  describe("POST signup routes", () => {
    it("should create a new user", async () => {
      const newUser = {
        username: "testuser",
        email: "test@example.com",
        password: "testpassword",
      };

      // Mocking User.findOne to return null, indicating user doesn't exist
      User.findOne = jest.fn().mockResolvedValue(null);

      // Mocking bcrypt.hash to return hashed password
      bcrypt.hash.mockResolvedValue("hashedPassword");

      // Mocking User.save to resolve successfully
      User.prototype.save = jest.fn().mockResolvedValue(undefined);

      const response = await request(app)
        .post("/user/auth/signup")
        .send(newUser);

      expect(response.status).toBe(200);
      expect(response.body.message).toBe("User registered successfully");
    });

    it("should return 400 if user already exists", async () => {
      const existingUser = {
        username: "testuser",
        email: "test@example.com",
        password: "testpassword",
      };

      // Mocking User.findOne to return an existing user
      User.findOne = jest.fn().mockResolvedValue(existingUser);

      const response = await request(app)
        .post("/user/auth/signup")
        .send(existingUser);

      expect(response.status).toBe(400);
      expect(response.body.message).toBe("User already exists, please log in!");
    });
  });

  // LOGOUT TEST
  describe("POST /logout", () => {
    it("should clear the YOUR-COOKIE cookie and return a success message", async () => {
      // First, log in the user to set the cookie
      const user = {
        id: "testUserId",
        email: "test@example.com",
        password: "hashedPassword",
      };

      User.findOne = jest.fn().mockResolvedValue(user);

      // Mocking bcrypt.compare to return true for password validation
      (bcrypt.compare).mockResolvedValue(true);

      // Mocking jwt.sign to return a token
      (jwt.sign).mockReturnValue("mockedToken");

      await request(app)
        .post("/user/auth/login")
        .send({
          email: "test@example.com",
          password: "testpassword",
        })
        .then(async (loginResponse) => {
          expect(loginResponse.status).toBe(200);
          expect(loginResponse.body.message).toBe("Login successful");
          expect(loginResponse.header["set-cookie"][0]).toContain(
            "mockedToken"
          );

          const logoutResponse = await request(app)
            .post("/user/auth/logout")
            .set("Cookie", loginResponse.headers["set-cookie"])
            .expect(200);
          expect(logoutResponse.body.message).toBe("Logout successful");
          expect(logoutResponse.headers["set-cookie"]).toBeDefined();
          // Check if the cookie is cleared
          const cookies = logoutResponse.headers["set-cookie"][0];
          expect(cookies).toMatch(/YOUR-COOKIE=;/);
          expect(cookies).toMatch(/Expires=/);
        });

      // Perform login to set the cookie
    });
  });

    // VERIFY JWT TEST
  describe("GET /isLoggedIn", () => {
    it("should return 200 and user data if token is valid", async () => {
      const token = jwt.sign({ userId: "userId" }, secretKey, {
        expiresIn: "1h",
      });

      (jwt.verify).mockReturnValue({ userId: "userId" });

      const response = await request(app)
        .get("/user/auth/isLoggedIn")
        .set("Cookie", [`YOUR-COOKIE=${token}`]);

      expect(response.status).toBe(200);
      expect(response.body.message).toBe("You have access");
      expect(response.body.user).toMatchObject({ userId: "userId" });
    });

    it("should return 401 if no token is provided", async () => {
      const response = await request(app).get("/user/auth/isLoggedIn");

      expect(response.status).toBe(401);
      expect(response.body.message).toBe("No token provided");
    });

    it("should return 401 if token is invalid", async () => {
      const invalidToken = "invalidToken";

      (jwt.verify).mockImplementation(() => {
        throw new Error("Invalid token");
      });

      const response = await request(app)
        .get("/user/auth/isLoggedIn")
        .set("Cookie", [`YOUR-COOKIE=${invalidToken}`]);

      expect(response.status).toBe(401);
      expect(response.body.message).toBe("Invalid or expired token");
    });

    it("should return 401 if token is expired", async () => {
      const expiredToken = jwt.sign({ userId: "userId" }, secretKey, {
        expiresIn: "-1h",
      });

      (jwt.verify).mockImplementation(() => {
        throw new Error("Token expired");
      });

      const response = await request(app)
        .get("/user/auth/isLoggedIn")
        .set("Cookie", [`YOUR-COOKIE=${expiredToken}`]);

      expect(response.status).toBe(401);
      expect(response.body.message).toBe("Invalid or expired token");
    });
  });
});
