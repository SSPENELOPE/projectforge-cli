/*
 * This is a generic mongoDB connection using the factory settings, 
 * update this connection to use your mongoDB connection string
 * 
*/
import mongoose from 'mongoose';

// Your database connection URI, add your db name to the end of the connection string
const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/';

// Connect to the database
mongoose.connect(uri);

// Export the mongoose connection object
export default mongoose.connection;