import express from 'express';
import ViteExpress from 'vite-express';
import session from 'express-session';
import authCtrl from './controller/authCtrl.js';
import petCtrl from './controller/petCtrl.js';
import maintenanceCtrl from './controller/maintenanceCtrl.js';

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

// function isLoggedIn(req) {
//     return req.session.userId !== undefined
// }
const isLoggedIn = req => req.session.userId !== undefined

const requireLogin = (req, res, next) => {
    if (!isLoggedIn(req)) {
        return res.status(401).json({ error: 'Unauthorized' })
    }
    next()
}

// destructure handler/controller functions
const { allUsers, register, login, checkUser, logout, isAdmin } = authCtrl;
const { allPets, addPet, removePet, updatePet } = petCtrl;
const { allRequests, addRequest, updateRequest, removeRequest } = maintenanceCtrl;

//set up usersAll and authentication endpoints 
app.get('/api/users', allUsers)

app.post('/api/register', register)
app.post('/api/login', login)
//app.post(checkUser)
app.post('/api/logout', logout)

// user/pet ROUTES / ENDPOINTS
app.get('/api/pets', allPets)
app.post('/api/new-pet', requireLogin, addPet)
app.delete('/api/pet/:id', requireLogin, removePet)
app.put('/api/edit-pet/:id', requireLogin, updatePet)

//Maintenance Requests routes here
app.get('/api/requests', allRequests)
app.post('/api/new-request', addRequest)
app.put('/api/edit-request/:id', updateRequest)
app.delete('/api/request/:id', removeRequest)

//admin routes
app.get('/api/admin', isAdmin)

//Message routes below  


// open up server 
ViteExpress.listen(app, PORT, () => console.log(`Ready for you on port ${PORT}!!! Head over to http://localhost:${PORT}`))