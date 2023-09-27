import { User, Pet, MaintenanceRequest } from './model.js'
import connectToDB from './db.js'
// import image from '../public/place_holder.jpg'

const db = await connectToDB('postgresql:///bellwines')

const userData = [
    {
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
        firstName: 'Frida',
        lastName: 'Kahlo',
        apartmentNumber: 101,
        email: 'frida@email.com',
    },
    {
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
        firstName: 'Moira',
        lastName: 'Rose',
        apartmentNumber: 102,
        email: 'moira@email.com',
    },
    {
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
        firstName: 'Murphy',
        lastName: 'Cooper',
        apartmentNumber: 103,
        email: 'murphy@email.com',
    },
    {
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
        firstName: 'Paulo',
        lastName: 'Coehlo',
        apartmentNumber: 104,
        email: 'paulo@email.com',
    },
    {
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
        firstName: 'Juan',
        lastName: 'Gabriel',
        apartmentNumber: 105,
        email: 'juan@email.com',
    }
]

const petData = [
    {
        name: 'Dog1',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png',
        description: 'Doggo ipsum length boy most angery pupper I have ever seen thicc borkdrive wrinkler, fluffer very taste wow shoober',
        userId: 1,
    },
    {
        name: 'Dog2',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png',
        description: 'Doggo ipsum long water shoob fluffer super chub snoot wow such tempt long water shoob, such treat doge floofs extremely cuuuuuute.',
        userId: 3,
    },
    {
        name: 'Cat1',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png',
        description: 'Kitten ipsum muffins scratches swatting doggo',
        userId: 4,
    },
    {
        name: 'Cat2',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png',
        description: 'Kitten ipsum meow meow meow',
        userId: 3,
    }
]

const requestData = [
    {
        description: 'Looks like the toilet is leaking around the base, and maybe also the shower. Please send someone to take a look',
        status: 'OPEN',
        userId: 2,
    },
    {
        description: 'Some of our blinds are broken. One in the second bedroom, and another one in the living room',
        status: 'OPEN',
        userId: 3,
    },
    {
        description: 'We need a new remote opener for the garage',
        status: 'OPEN',
        userId: 4,
    },
    {
        description: 'Our fauce is leaking from the top and also under the sink!',
        status: 'OPEN',
        userId: 1,
    },
    {
        description: 'Please send someone to take a look at our furnace, it is not heating up',
        status: 'OPEN',
        userId: 2,
    }
]

await db.sync({ force: true }).then(async () => {
    await User.bulkCreate(userData)
    await Pet.bulkCreate(petData)
    await MaintenanceRequest.bulkCreate(requestData)
    console.log('db reset and seeded')
})

await db.close()