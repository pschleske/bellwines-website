import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import image from '../shared/img123.jpg'

export const Pets = () => {
    const [petData, setPetData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/pets');
                setPetData(response.data)
            } catch (error) {
                console.error('Error getting pets:', error);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            <h3>PETS</h3>
            <ul>
                {petData.map((item) => (
                    <li key={item.petId}>
                        <strong>Pet Name:</strong> {item.name}
                        <img src={image} alt="" />
                        <strong>About me:</strong> {item.description}
                    </li>
                ))}
            </ul>
        </div>
    )
}
