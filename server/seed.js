import { User } from './model.js'
import connectToDB from './db.js'

const db = await connectToDB('postgresql:///bellwines')

const userData = [
    {
        fullName: 'Moira Rose',
        apartmentNumber: 1,
        email: 'moira@rose.com',
    }
]

await db.sync({ force: true }).then(async () => {
    await User.create(userData)
    console.log('db reset and seeded')
})

await db.close()