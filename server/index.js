import express from "express";
import ViteExpress from 'vite-express';
import session from 'express-session';

// set up instance
const app = express();

const PORT = 4545;

//set up middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({ secret: 'codeallday', saveUninitialized: false, resave: false }));

// set up ROUTES / ENDPOINTS 


// open up server 
ViteExpress.listen(app, PORT, () => console.log(`Ready for you on port ${PORT}!!! Head over to http://localhost:${PORT}`))