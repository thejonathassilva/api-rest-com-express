import mongoose from 'mongoose';
import * as dotenv from 'dotenv'

dotenv.config();
mongoose.connect("mongodb+srv://cluster0.4tlc5wx.mongodb.net", {
    // "auth": { "authSource": "admin" },
    user: process.env.USER_MONGO,
    pass: process.env.PASSWORD_MONGO,
    dbName: 'alura-node'
});
let db = mongoose.connection;

export default db;