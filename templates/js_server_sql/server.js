const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const routes = require('./controllers/index');
const sequelize = require('./config/connection');

const app = express();



console.log("Server starting...");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: '*'
}));

app.use(cookieParser());

app.use(routes);

const startServer = async () => {
    try {
      const PORT = process.env.PORT || 3001;

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

module.exports = app;