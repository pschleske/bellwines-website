import express from "express";
import ViteExpress from 'vite-express';
import session from 'express-session';
import handlerFunctions from "./controller/routesCtrl.js";
import authCtrl from "./controller/authCtrl.js"

// set up instance
const app = express();

const PORT = 4545;

//set up middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session(
    {
        secret: 'codeallday',
        saveUninitialized: true,
        resave: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 48
        }
    }
));

// destructure handler/controller functions
const { getAllUsers } = handlerFunctions
const { register, login, checkUser, logout } = authCtrl

//set up authentication endpoints 
app.post('/api/register', register)
app.post('/api/login', login)
//app.post(checkUser)
app.post('/api/logout', logout)


// set up other ROUTES / ENDPOINTS 
app.get('/api/users', getAllUsers)
app.get('/api/pets',)


// open up server 
ViteExpress.listen(app, PORT, () => console.log(`Ready for you on port ${PORT}!!! Head over to http://localhost:${PORT}`))