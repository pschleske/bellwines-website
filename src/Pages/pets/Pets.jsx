import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
// import image from '../shared/img123.jpg'
import { PetAddButton } from './PetAddButton';
import { Pet } from './Pet';
import { useAuth } from '../../shared/contexts/useAuth'

export const Pets = () => {
    const [petData, setPetData] = useState([]);
    const [showAddPet, setShowAddPet] = useState(false)

    const [name, setName] = useState('')
    const [imgUrl, setImgUrl] = useState('')
    const [description, setDescription] = useState('')

    const { currentUser, setCurrentUser } = useAuth()

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        // console.log('pets:', storedUser)
        const userObj = JSON.parse(storedUser)
        if (storedUser) {
            setCurrentUser(userObj);
        }
    }, []);
    // console.log(currentUser)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/pets');
                setPetData(response.data);
            } catch (error) {
                console.error('Error getting pets:', error);
            }
        };

        fetchData();
    }, []);

    const addPet = async (event) => {
        event.preventDefault()
        console.log('hit ADD PET!!!!!!')
        try {
            if (!name || !imgUrl || !description) {
                alert('Please fill out all fields before adding a pet')
                return;
            }

            let { data } = await axios.post('/api/new-pet', {
                name,
                imgUrl,
                description
            })
            setPetData([...petData, data])
            setShowAddPet(false)

        } catch (error) {
            console.error('Error adding pet:', error)
        }
    }

    const deletePet = async (id) => {
        const { data } = await axios.delete(`/api/pet/${id}`)
        if (!data.error) {
            const filteredPets = petData.filter(element => element.petId !== id)
            setPetData(filteredPets)
        }
    }

    // const cards = petData.map((petItem) => {
    //     const { id, name, imgUrl, description } = petItem

    //     return (
    //         <div key={petItem.petId}>
    //             <Pet
    //                 id={petItem.petId}
    //                 initialPetData={{ name: petItem.name, imgUrl: petItem.imgUrl, description: petItem.description }}
    //                 initialIsEditing={false}
    //                 deleteFunc={() => deletePet(petItem.petId)}
    //             />
    //         </div>
    //     )
    // })

    // to do:
    // add a show ADD pet state
    // create form and conditionally render based on showAdd pet state 
    if (showAddPet === true) {
        return (
            <form onSubmit={(event) => addPet(event)}>
                <button onClick={() => setShowAddPet(false)}>x</button>
                <label htmlFor="">Pet Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <label htmlFor="">Photo:</label>
                <input
                    type="text"
                    value={imgUrl}
                    onChange={(event) => setImgUrl(event.target.value)}
                />
                <label htmlFor="">Tell us about your pet:</label>
                <input
                    type="text"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
                <PetAddButton />
            </form>
        )
    }

    //TO DO: ADD AN X BUTTON ON FORM ABOVE, TO ENABLE USERS TO GO BACK TO THE LIST OF PETS. BUTTON WILL SET SHOWADDPET TO FALSE AND RENDER THE LLIST OF PETS 
    // At the moment the only way to get out of this page is by clicking on a different link such as directory and then back to pets 

    return (
        <div>

            <PetAddButton addClick={() => setShowAddPet(true)} />
            <div>
                {petData.map((petItem) => (
                    <Pet
                        key={petItem.petId}
                        id={petItem.petId}
                        initialPetData={{
                            userId: petItem.userId,
                            name: petItem.name,
                            imgUrl: petItem.imgUrl,
                            description: petItem.description,
                        }}
                        initialIsEditing={false}
                        deleteFunc={() => deletePet(petItem.petId)}
                        currentUserData={currentUser.userId}

                    />
                ))}
                {console.log(9999, currentUser.userId)}
            </div>
        </div>
    )
}



// return (
//     <div>
//         <h3>PETS</h3>
//         <button onClick={handleAdd}>Add Pet</button>
//         <ul>
//             {petData.map((item) => (
//                 <li key={item.petId}>
//                     <strong>Pet Name:</strong> {item.name}
//                     <img src={image} alt="" />
//                     <strong>About me:</strong> {item.description}
//                     <button onClick={handleEdit}>Edit</button> <br />
//                     <button onClick={handleDelete}>Delete</button>
//                 </li>
//             ))}
//         </ul>
//     </div>
// )