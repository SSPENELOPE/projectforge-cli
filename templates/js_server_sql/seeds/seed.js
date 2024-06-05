import sequelize from "../config/connection";
import { User } from "../models/user";
const userData = require('./userData.json')


const seedDatabase = async () => {

  userData.forEach((element) => {
    console.log(element);
  });
  
  await sequelize.sync({ force: true })

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  console.log(users.length, " Users created.")

  process.exit(0);
};

seedDatabase();