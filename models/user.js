// import sequelize 
import { Sequelize } from "sequelize";
// import connection 
import db from "../config/database.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const User = db.define('users', {
  // Define attributes
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    field: 'user_id'
  },
  name: {
    type: DataTypes.STRING
  },
  // lastName: {
  //   type: DataTypes.STRING,
  //   field: 'last_name'
  // },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING
  },
  createdOn: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    field: 'created_on'
  }
},{
  tableName: 'user'
});
 
// Export model User
export default User;