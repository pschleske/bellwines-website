import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
// import { useAuth } from '../../shared/contexts/useAuth';


export const Directory = () => {
    const [directoryData, setDirectoryData] = useState([]);
    const [pet, setPet] = useState([]);
    // const [adminMode, setAdminMode] = useState(false);

    // const { currentUser, setCurrentUser } = useAuth()


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
            // console.log(response.data)
            setPet(response.data)
        } catch (error) {
            alert('Error getting data', error)
        }
    }

    const petData = (id) => {

        return pet.map((item) => {
            if (item.userId === id) {
                return (
                    <p key={item.petId}>{item.name}</p>
                )
            }
        })
    }

    // console.log('Directory current user:', currentUser.isAdmin)
    // const isUserAdmin = () => {
    //     if (currentUser.isAdmin === true) {
    //         setAdminMode(true)
    //     }
    // }

    useEffect(() => {
        getPetNames();
    }, [])

    // useEffect(() => {
    //     isUserAdmin();
    // }, [])

    return (
        <div>
            <h3>Directory</h3>
            <div>
                {directoryData.map((item) => (
                    <div key={item.userId}>
                        <img src={item.imgUrl} />
                        <strong>Full Name:</strong> {item.fullName} <br />
                        <strong>Apt #:</strong> {item.apartmentNumber}
                        <div><strong>Pets:</strong>{pet[0] && petData(item.userId)}</div>
                    </div>
                ))}
            </div>
        </div>
    );

    // adminMode ? (
    //     <div>
    //         <h3>Directory</h3>
    //         <div>
    //             {directoryData.map((item) => (
    //                 <div key={item.userId}>
    //                     <img src={item.imgUrl} />
    //                     <strong>Full Name:</strong> {item.fullName} <br />
    //                     <strong>Apt #:</strong> {item.apartmentNumber}
    //                     <div><strong>Pets:</strong>{pet[0] && petData(item.userId)}</div>
    //                     <button> Edit </button> <button onClick={setAdminMode(false)}> Save </button> <button> Delete </button>
    //                 </div>
    //             ))}
    //         </div>
    //     </div>

    // ) : 

};




