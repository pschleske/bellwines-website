import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const Requests = () => {
    const [requestData, setRequestData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/requests');
                setRequestData(response.data)
            } catch (error) {
                console.error('Error while getting requests:', error)
            }
        }
        fetchData();
    }, [])

    return (
        <div>
            <h3>REQUESTS</h3>
            <table>
                <tr>
                    <th>Request ID</th>
                    <th>Status</th>
                    <th>Description</th>
                    <th>Date Created</th>
                    <th></th>
                </tr>
                <tbody>
                    {requestData.map((item) => (
                        <tr key={item.requestId}>
                            <td> {item.requestId} </td>
                            <td> {item.status} </td>
                            <td> {item.description} </td>
                            <td> {item.createdAt} </td>
                            <td> <button>Edit</button> <button>Delete</button>
                                {/* <button>Save</button> */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
