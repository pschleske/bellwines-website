import { User } from '../model.js';
import bcrypt from "bcryptjs";

export default {
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
    },

    login: async (req, res) => {
        console.log('hit Login')
        const { email, password } = req.body;
        const user = await User.findOne({
            where: { email: email }
        });
        if (user && bcrypt.compare(password, user.hashedPass)) {
            req.session.userId = user.userId;
            res.status(200).send(req.session.user)
        } else {
            res.json({ success: false })
        }
    },

    checkUser: async (req, res) => {
        console.log('hit checkUser')
    },

    logout: async (req, res) => {
        console.log('hit logout')
        if (!req.session.userId) {
            res.status(401).send('Unauthorized!')
        } else {
            req.session.destroy();
            res.json({ success: true })
        }
    }
}