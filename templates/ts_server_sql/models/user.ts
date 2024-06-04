import { Model, DataTypes } from "sequelize";
import bcrypt from "bcrypt";
import sequelize from "../config/connection";

type UserAttributes = {
  id: number;
  username: string;
  email: string;
  password: string;
}


export class User extends Model<UserAttributes> {
  declare id: number;
  declare username: string;
  declare email: string; 
  declare password: string;


  checkPassword(LoginPassword: string) {
    return bcrypt.compareSync(LoginPassword, this.password);
  }
}  

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,

      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    hooks: {
      beforeCreate: async (newUserData: any) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

export default User;
