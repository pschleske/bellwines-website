import { User } from '../model.js'

export default {
    oneUser: async (req, res) => {
        console.log("hit getOneUser")
        try {
            // const { firstName, lastName, imgUrl, email } = req.body
            const { userId } = req.session.user;

            const userProfile = await User.findOne({
                where: { userId }
            })
            res.status(200).send(userProfile)
        } catch (err) {
            console.log(err)
            res.status(500).send("Something went wrong!")
        }
    },
    updateProfile: async (req, res) => {
        console.log('hit updateProfile!')
        try {
            const { id } = req.params;
            const { firstName, lastName, imgUrl, email } = req.body;

            const [updatedInputs] = await User.update({
                firstName,
                lastName,
                imgUrl,
                email
            },
                {
                    where: { userId: id }
                }
            );
            if (updatedInputs === 0) {
                res.status(404).json({ success: false, message: 'User not found' })
            } else {
                const updateProfile = await User.findByPk(id);
                res.status(200).json({ success: true, updateProfile })
            }
        } catch (error) {
            console.error('Error trying to update profile:', error)
            res.status(500).json({ success: false, message: 'Internal Server Error' })
        }
    }
}
