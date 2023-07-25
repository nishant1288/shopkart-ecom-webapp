import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser'
import Router from "./routes/route.js";
import Connection from './database/db.js';
import DefaultData from './default.js';

const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({extended : true}));
app.use('/', Router);

const PORT = process.env.PORT || 8000;


const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const URL = process.env.MONGODB_URI || `mongodb+srv://${USERNAME}:${PASSWORD}@shopkart-database.qg2qpwt.mongodb.net/`

Connection(URL);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})

DefaultData();