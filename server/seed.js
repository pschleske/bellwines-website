import { User, Pet } from './model.js'
import connectToDB from './db.js'
// import image from '../public/place_holder.jpg'

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

// const petData = [
//     {
//         name: 'Dog1',
//         imgUrl: 'image',
//         description: 'Test Test'
//     },
//     {
//         name: 'Dog2',
//         imgUrl: 'image',
//         description: 'Another test'
//     }
// ]

await db.sync({ force: true }).then(async () => {
    await User.bulkCreate(userData)
    console.log('db reset and seeded')
})

await db.close()