import { User, Pet, MaintenanceRequest, Message } from '../model.js';

const handlerFunctions = {
    getAllUsers: async (req, res) => {
        try {
            console.log("hit getAllUsers")
            const users = await User.findAll()
            res.status(200).send(users)
        } catch (err) {
            console.log(err)
            res.status(500).send("Something went wrong!")
        }
    }
}

export default handlerFunctions