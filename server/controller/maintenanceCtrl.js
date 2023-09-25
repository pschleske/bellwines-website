import { MaintenanceRequest, User } from '../model.js'

const maintenanceFunctions = {
    allRequests: async (req, res) => {
        try {
            console.log('hit allRequests')
            const { userId } = req.query;

            if (!userId || isNaN(userId)) {
                return res.status(400).send('Invalid userId')
            }

            const user = await User.findOne({
                where: { userId: userId },
            })
            if (user.isAdmin == true) {
                const adminRequests = await MaintenanceRequest.findAll()
                res.status(200).send(adminRequests)
            } else {
                // get the userdata by userId 
                // check userData, if isAdmin === true 
                // if true, then get all requests 
                // if false, below (get only requests belonging to userId)
                const requests = await MaintenanceRequest.findAll({
                    where: { userId: userId },
                })
                res.status(200).send(requests)
            }
        } catch (error) {
            res.status(500).send('Something went wrong!')
        }
    },

    addRequest: async (req, res) => {
        try {
            console.log('hit addRequests')
            // console.log('Session Data:', req.session.user)
            const { description, status } = req.body;
            const { userId } = req.session.user;

            // console.log('user received from sesh:', userId)

            const requestRow = await MaintenanceRequest.create({
                userId,
                status,
                description
            },
                // {
                //     include: User
                // }
            );
            res.status(200).send(requestRow)
        } catch (error) {
            console.error('Error adding request:', error);
            res.status(500).json({ error: "Internal Server Error" })
        }
    },

    updateRequest: async (req, res) => {
        try {
            console.log('hit updateRequest')
            const { userId } = req.session;
            const { id } = req.params;
            const { status, description } = req.body;

            const request = await MaintenanceRequest.findByPk(id);
            if (!request) {
                return res.status(404).json({ success: false, message: 'Maintenance request not found' });
            }
            request.status = status;
            request.description = description;
            await request.save();

            res.status(200).json({ success: true, message: 'Maintenance request updated successfully' });
            // const [updatedRequestRow] = await MaintenanceRequest.update({
            //     description,
            // },
            //     {
            //         where: { requestId: id }
            //     }
            // );
            // if (updatedRequestRow === 0) {
            //     res.status(404).json({ success: false, message: 'Request not found' })
            // } else {
            //     const updatedRequest = await Pet.findByPk(id);
            //     res.status(200).json({ success: true, updateRequest })
            // }
        } catch (error) {
            console.error('Error updating request:', error)
            res.status(500).json({ success: false, message: 'Internal server error' })
        }
    },

    removeRequest: async (req, res) => {
        try {
            console.log('hit removeRequest')
            const { id } = req.params

            const deletedRequest = MaintenanceRequest.destroy({
                where: { requestId: id }
            });
            if (deletedRequest) {
                res.status(200).json({ success: true, message: 'Request deleted successfully!' })
            } else {
                res.status(500).json({ success: false, message: 'Request not found' })
            }
        } catch (error) {
            console.error('There was a problem deleting your request', error)
            res.status(500).json({ success: false, message: 'Internal Server Error' })
        }
    }
}

export default maintenanceFunctions;