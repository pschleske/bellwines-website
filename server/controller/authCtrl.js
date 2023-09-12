import { User } from '../model.js';
import bcrypt from "bcryptjs";

export default {
    register: async (req, res) => {
        console.log('hit Register')
        try {
            const { fullName, apartmentNumber, email, password } = req.body;

            const foundUser = await User.findOne({ where: { email } })

            if (foundUser) {
                res.status(400).send('This username is already taken!')
            } else {
                const salt = bcrypt.genSaltSync(10)
                const hash = bcrypt.hashSync(password, salt)

                const newUser = await User.create({ fullName, apartmentNumber, email, hashedPass: hash })

                req.session.user = {
                    userId: newUser.id,
                    fullName: newUser.fullName,
                    apartmentNumber: newUser.apartmentNumber,
                    email: newUser.email
                }
                res.status(200).send(req.session.user)
            }
        } catch (err) {
            console.log(err)
            res.status(500).send('Something went wront trying to register')
        }
    }
}