import { User, Pet, MaintenanceRequest } from '../model.js';

const adminFunctions = {
    adminRequests: async (req, res) => {
        try {
            // const { isAdmin } = req.session.user;
            console.log('adminRequests function fired:')
            // if (!isAdmin || isAdmin === null) {
            //     return res.status(400).send('Invalid userId')
            // }
            const requests = await MaintenanceRequest.findAll()
            res.status(200).send(requests)
        } catch (error) {
            console.log(error)
            res.status(500).send('Internal Server Error at AdminRequest')
        }
    },

    adminPets: async (req, res) => {
        try {
            console.log('adminPets function fired:')
            const pets = await Pet.findAll()
            res.status(200).send(pets)
        } catch (error) {
            console.log(error)
            res.status(500).send('Internal Server Error at AdminPets')
        }
    },

    adminDirectory: async (req, res) => {
        try {
            console.log('adminDirectory function fired!')
            const users = await User.findAll()
            res.status(200).send(users)
        } catch (error) {
            console.log(error)
            res.status(500).send('Internal Server Error at AdminDirectory')
        }
    }
}

export default adminFunctions;