import express, { Application } from "express";
import routes from "./controllers";
import sequelize from "./config/connection";
import cors from "cors";
import cookieParser from 'cookie-parser';

const app: Application = express();

const PORT: number = process.env.PORT as unknown as number || 3001;

console.log("Server starting...");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: '*'
}));

app.use(cookieParser());

app.use(routes);

const startServer = async (): Promise<void> => {
    try {
      // Ensure the database connection is established before starting the server
      await sequelize.authenticate();
      console.log("Connection to the database has been established successfully.");
  
      // await sequelize.sync();
  
      await sequelize.sync({ force: false });
  
      app.listen(PORT, () => {
        console.log(`Now listening on port: ${PORT}`);
      });
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  };
  
  // Call the function to start the server
  startServer();