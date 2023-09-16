import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
// import image from '../shared/img123.jpg'
import { PetAddButton } from './PetAddButton';
import { Pet } from './Pet';

export const Pets = () => {
    const [petData, setPetData] = useState([]);

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

    const addPet = async () => {

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


    return (
        <>
            <PetAddButton addClick={addPet} />
            {petData.map((petItem) => (
                <Pet
                    key={petItem.petId}
                    id={petItem.petId}
                    initialPetData={{
                        name: petItem.name,
                        imgUrl: petItem.imgUrl,
                        description: petItem.description,
                    }}
                    initialIsEditing={false}
                    deleteFunc={() => deletePet(petItem.petId)}
                />
            ))}
        </>
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