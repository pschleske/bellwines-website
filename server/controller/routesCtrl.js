import { User, Pet, MaintenanceRequest, Message } from '../model.js';

const handlerFunctions = {
    allUsers: async (req, res) => {
        try {
            console.log("hit getAllUsers")
            const users = await User.findAll()
            res.status(200).send(users)
        } catch (err) {
            console.log(err)
            res.status(500).send("Something went wrong!")
        }
    },

    allPets: async (req, res) => {
        try {
            console.log('hit getAllPets')
            const pets = await Pet.findAll()
            res.status(200).send(pets)
        } catch (err) {
            console.log(err)
            res.status(500).send("Oops! Couldn't get pets!")
        }
    },

    addPet: async (req, res) => {
        try {
            console.log('hit addPet')
            const { name, description } = req.body;
            // const { userId } = req.session;

            const petCard = await Pet.create({
                name,
                // imgUrl,
                description
                // userId
            });
            res.status(201).json(petCard)
        } catch (err) {
            console.log(err)
            res.status(500).send("Oops! something's not right on the server side :( ")
        }
    },

    removePet: async (req, res) => {
        console.log('hit removePet')
        try {
            const { id } = req.params;

            const deletedPet = await Pet.destroy({
                where: { petId: id }
            })
            if (deletedPet) {
                res.status(200).json({ success: true, message: 'Pet Deleted Successfully!' })
            } else {
                res.status(404).json({ success: false, message: 'Pet not found' })
            }
        } catch (error) {
            console.error('Error deleting pet:', error)
            res.status(500).json({ success: false, message: 'Internal Server Error' })
        }
    }
}

export default handlerFunctions