import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
// import image from '../shared/img123.jpg'
// import { useAuth } from '../../shared/contexts/useAuth';

export const Directory = () => {
    // const { currentUser, setCurrentUser } = useAuth();
    const [directoryData, setDirectoryData] = useState([]);

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

    return (
        <div>
            <h3>Directory</h3>
            <ul>
                {directoryData.map((item) => (
                    <li key={item.userId}>
                        {/* <img src={image} /> */}
                        <strong>Full Name:</strong> {item.fullName}, <strong>Apartment Number:</strong> {item.apartmentNumber}
                    </li>
                ))}
            </ul>
        </div>
    );
};




