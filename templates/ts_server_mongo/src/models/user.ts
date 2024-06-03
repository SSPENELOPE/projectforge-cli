// Generic User Schema for mongoDB, add to or take away to make this fit your needs

import mongoose, { Document } from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        username: String,
        email: String,
        password: String,
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
        id: false,
    }
);


interface UserDocument extends Document {
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    trails: mongoose.Types.ObjectId[];
}

const User = mongoose.model<UserDocument>('User', userSchema);

export { User, UserDocument }; 