import express from 'express';
import ViteExpress from 'vite-express';
import session from 'express-session';
import Stripe from 'stripe';

import authCtrl from './controller/authCtrl.js';
import petCtrl from './controller/petCtrl.js';
import maintenanceCtrl from './controller/maintenanceCtrl.js';
import adminCtrl from './controller/adminCtrl.js';

// set up instance
const app = express();

const PORT = 4545;

// destructure handler/controller functions
const { allUsers, register, login, checkUser, logout, isAdmin } = authCtrl;
const { allPets, addPet, removePet, updatePet, getPetOwners } = petCtrl;
const { allRequests, addRequest, updateRequest, removeRequest } = maintenanceCtrl;
const { adminRequests, adminPets, adminDirectory } = adminCtrl;

//set up middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session(
    {
        secret: 'codeallday',
        saveUninitialized: true,
        resave: false,
        cookie: {
            path: '/',
            httpOnly: false,
            maxAge: 1000 * 60 * 60 * 48

        }
    }
));
const stripe = new Stripe('sk_test_51NuLfSHrrNngtjIfCxtI1TKBLBUWE2SgSrA4bMRDyfwGYwy4mgTPQML4Eraf683ZDB4BgA90tfZg2XicUr0MRj2q00UDXFhrHZ');

// API GET REQUEST 
const api_url = "https://zenquotes.io/api/quotes/";

async function getApi(req, res) {
    const response = await fetch(api_url);
    const data = await response.json();
    // const quote = data.map((el) => `Quote:${el.q}  Author:${el.a}`)
    // console.log(quote)
    res.status(200).send(data)
}
// stripe end point here:
const calculateOrderAmount = (items) => {
    // const total = items * amount
    return 165000;
};

app.post("/create-payment-intent", async (req, res) => {
    const { items } = req.body;

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(items),
        currency: "usd",
        automatic_payment_methods: {
            enabled: true,
        },
    });

    res.send({
        clientSecret: paymentIntent.client_secret,
    });
});

// external public API:  
app.get('/api/quotes', getApi)

//set up usersAll and authentication endpoints 
app.get('/api/directory', allUsers)

app.post('/api/register', register)
app.post('/api/login', login)
app.get('/api/user', checkUser)
app.delete('/api/logout', logout)

// user/pet ROUTES / ENDPOINTS
app.get('/api/pets', allPets)
app.post('/api/new-pet', addPet)
app.delete('/api/pet/:id', removePet)
app.put('/api/edit-pet/:id', updatePet)

//Maintenance Requests routes here
app.get('/api/requests', allRequests)
app.post('/api/new-request', addRequest)
app.put('/api/edit-request/:id', updateRequest)
app.delete('/api/request/:id', removeRequest)

//admin routes
// app.get('/api/admin', isAdmin)
app.get('/api/pet-owners', getPetOwners)
app.get('/api/admin', adminRequests)
app.get('/api/admin1', adminPets)
app.get('/api/admin2', adminDirectory)

//Message routes below  


// open up server 
ViteExpress.listen(app, PORT, () => console.log(`Ready for you on port ${PORT} !!!Head over to http://localhost:${PORT}`))