import { Pet, Message } from '../model.js';

const petFunctions = {
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
            const { name, imgUrl, description } = req.body;
            const { userId } = req.session;

            const petCard = await Pet.create({
                name,
                imgUrl,
                description,
                userId
            });
            res.status(201).send(petCard)
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
    },

    updatePet: async (req, res) => {
        console.log('hit updatePet!')
        try {
            const { id } = req.params;
            const { name, imgUrl, description } = req.body;

            const [updatedRowsCount] = await Pet.update({
                name,
                imgUrl,
                description
            },
                {
                    where: { petId: id }
                }
            );
            if (updatedRowsCount === 0) {
                res.status(404).json({ success: false, message: 'Pet not found' })
            } else {
                const updatePetCard = await Pet.findByPk(id);
                res.status(200).json({ success: true, updatePetCard })
            }
        } catch (error) {
            console.error('Error trying to update pet:', error)
            res.status(500).json({ success: false, message: 'Internal Server Error' })
        }
    }
}

export default petFunctions;