import axios from "axios"
import { useState, useEffect } from "react"


export const Admin = () => {
    const [adminRequestsData, setAdminRequestsData] = useState([]);
    const [adminPetData, setAdminPetData] = useState([]);
    const [adminUserData, setAdminUserData] = useState([]);

    const [adminEdit, setAdminEdit] = useState(false);

    const [reqDescription, setReqDescription] = useState(adminRequestsData.description)
    const [status, setStatus] = useState(adminRequestsData.status)

    const changeEditMode = () => { setAdminEdit(true) }
    const changeNonEdit = () => { setAdminEdit(false) }

    useEffect(() => {
        const fetchRequestData = async () => {
            try {
                const response = await axios.get('/api/admin')
                setAdminRequestsData(response.data)
            } catch (error) {
                console.log("Error getting admin requests!", error)
            }
        }

        fetchRequestData();
    }, [])

    useEffect(() => {
        const fetchPetData = async () => {
            try {
                const res = await axios.get('/api/admin1')
                setAdminPetData(res.data)
            } catch (err) {
                console.log('Error getting AdminPetData:', err)
            }
        }

        fetchPetData();
    }, [])

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('/api/admin2')
                setAdminUserData(response.data)
            } catch (err) {
                console.log('Error fetching admin user data!')
            }
        }

        fetchUserData();
    }, [])

    // const updateRequest = async (requestId, bodyObj) => {
    //     try {
    //         let bodyObj = {
    //             status,
    //             description: reqDescription
    //         }
    //         const { data } = await axios.put(`/api/edit-request/${adminRequestsData.requestId}`, bodyObj)
    //         if (!data.error) {
    //             setAdminEdit(false)
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    const updateRequest = async (requestId, bodyObj) => {
        // let bodyObj = {
        //     status,
        //     description: reqDescription
        // }
        try {

            const { data } = await axios.put(`/api/edit-request/${requestId}`, bodyObj);

            if (!data.error) {
                setAdminEdit(false);

                // Optionally, update the state with the modified data
                setAdminRequestsData((prevData) =>
                    prevData.map((item) => {
                        if (item.requestId === requestId) {
                            return { ...item, ...bodyObj };
                        }
                        return item;
                    })
                );
            }
        } catch (error) {
            console.log(error);
        }
    };

    // const handleStatusChange = (event, requestId) => {
    //     const newStatus = event.target.value;

    //     const updatedItem = adminRequestsData.find(item => item.requestId === requestId);
    //     if (updatedItem) {
    //         updatedItem.status = newStatus;
    //     }
    // };
    const handleStatusChange = (event, requestId) => {
        const newStatus = event.target.value;
        const statusUpdate = { status: newStatus };

        updateRequest(requestId, statusUpdate);
    };

    const handleDescriptionChange = (event, requestId) => {
        // Get the new description from the event
        const newDescription = event.target.value;

        // Update the corresponding item in the state
        setRequestData(prevData => {
            return prevData.map(item => {
                if (item.requestId === requestId) {
                    return { ...item, description: newDescription };
                }
                return item;
            });
        });
    };

    return !adminEdit ? (
        <>
            <h3>Admin</h3>
            <h4> Requests </h4>
            <button> ADD REQUEST </button>
            <table>
                <thead>
                    <tr>
                        <th>Request ID</th>
                        <th>Date Created</th>
                        <th>Status</th>
                        <th>Description</th>
                        <th> User Id</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {adminRequestsData.map((item) => (
                        <tr key={item.requestId}
                            id={item.requestId}>
                            <td> {item.requestId} </td>
                            <td> {item.createdAt} </td>
                            <td> {item.status} </td>
                            <td> {item.description} </td>
                            <td> {item.userId} </td>
                            <td>
                                <button onClick={() => setAdminEdit(true)}> Edit </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <br />

            <h4>Pets</h4>
            <table>
                <thead>
                    <tr>
                        <th>Pet Id</th>
                        <th>Pet Name</th>
                        <th>Image Url</th>
                        <th>Description</th>
                        <th>Pet Owner Id</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {adminPetData.map((petItem) => (
                        <tr key={petItem.petId}>
                            <td> {petItem.petId} </td>
                            <td> {petItem.name} </td>
                            <td> {petItem.imgUrl} </td>
                            <td> {petItem.description} </td>
                            <td> {petItem.userId} </td>
                            <td>
                                <button> Edit </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <br />

            <h4>Users</h4>
            <table>
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Image Url</th>
                        <th>Apt #</th>
                        <th>Email</th>
                        <th>Admin</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {adminUserData.map((userItem) => (
                        <tr key={userItem.userId}>
                            <td> {userItem.userId} </td>
                            <td> {userItem.firstName} </td>
                            <td> {userItem.lastName} </td>
                            <td> {userItem.imgUrl} </td>
                            <td> {userItem.apartmentNumber} </td>
                            <td> {userItem.email} </td>
                            <td> {userItem.isAdmin} </td>
                            <td>
                                <button onClick={() => setAdminEdit(true)}> Edit </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    ) : (
        <>
            <h3>Admin</h3>
            <h4> Requests </h4>
            <button> ADD REQUEST </button>
            <table>
                <thead>
                    <tr>
                        <th>Request ID</th>
                        <th>Date Created</th>
                        <th>Status</th>
                        <th>Description</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {adminRequestsData.map((item) => (
                        <tr key={item.requestId}
                            id={item.requestId}>
                            <td> {item.requestId} </td>
                            <td> {item.createdAt} </td>
                            <td>

                                <select
                                    name="status"
                                    value={item.status}
                                    onChange={(event) => handleStatusChange(event.target.value)}
                                    autoFocus={true}
                                >
                                    <option value="Open">Open</option>
                                    <option value="Under Review">Under Review</option>
                                    <option value="Need More Info">Need More Info</option>
                                    <option value="Scheduled">Scheduled</option>
                                    <option value="Closed">Closed</option>
                                </select>

                            </td>
                            <td>
                                <input
                                    type="text"
                                    // placeholder="Tell us about the issue you're having"
                                    // value={item.description}
                                    onChange={(event) => handleDescriptionChange(event.target.value)}
                                />

                            </td>
                            <td>
                                <button onClick={() => { updateRequest(item.requestId, adminRequestsData); setAdminEdit(false) }}> Save </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
