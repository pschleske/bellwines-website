import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';


export const Directory = () => {
    const [directoryData, setDirectoryData] = useState([]);
    const [pet, setPet] = useState([]);
    const [ownsPet, setOwnsPet] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/directory');
                setDirectoryData(response.data);
            } catch (error) {
                console.error('Error getting the directory:', error);
            }
        };

        fetchData();
    }, []);


    const getPetNames = async () => {
        try {
            const response = await axios.get('/api/pet-owners')
            console.log(response.data)
            setPet(response.data)
        } catch (error) {
            alert('Error getting data', error)
        }
    }

    const petData = (id) => {

        return pet.map((item) => {
            if (item.userId === id) {
                // result.push(pet.name)
                return (
                    <p key={item.petId}>{item.name}</p>
                )
            }
        })
        // return result
        console.log(ownsPet)
    }
    // petData(pet, id)

    useEffect(() => {
        getPetNames();
    }, [])

    return (
        <div>
            <h3>Directory</h3>
            <div>
                {directoryData.map((item) => (
                    <div key={item.userId}>
                        <img src={item.imgUrl} />
                        <strong>Full Name:</strong> {item.fullName} <br />
                        <strong>Apt #:</strong> {item.apartmentNumber}
                        <>{pet[0] && petData(item.userId)}</>
                    </div>
                ))}
            </div>
            {/* {petData(id)} */}
        </div>
    );
};




