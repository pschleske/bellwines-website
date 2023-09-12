import { User } from './model.js'
import connectToDB from './db.js'

const db = await connectToDB('postgresql:///bellwines')

const userData = [
    {
        fullName: 'Moira Rose',
        apartmentNumber: 1,
        email: 'moira@rose.com',
    },
    {
        fullName: 'Murphy Cooper',
        apartmentNumber: 2,
        email: 'murphy@cooper.com'
    }
]

await db.sync({ force: true }).then(async () => {
    await User.bulkCreate(userData)
    console.log('db reset and seeded')
})

await db.close()