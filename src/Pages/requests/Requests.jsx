import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

import { RequestHeader } from './RequestHeader';
import { RequestRow } from './RequestRow';
// import { RequestDescription } from './RequestDescription';
import { RequestStatus } from './RequestStatus';
// import { ModeButtons } from './ModeButtons';
import { AddButton } from './AddButton';

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

    const addRequestRow = async () => {
        try {
            let { data } = await axios.post('/api/new-request', { description: 'description' })
            //get a copy of current list 
            //create new blank object for row
            //push new object into copied list 
            //update state with new version of list 
            // const newList = [...requestData]
            // const newRow = {
            //     description: 'Description'
            // }
            // newList.push(newRow)
            // setRequestData(newList)
            setRequestData([...requestData, data])

        } catch (error) {
            console.log("Error adding new request:", error)
        }
    }

    const deleteRequestRow = async (id) => {
        try {
            const { data } = await axios.delete(`/api/request/${id}`)
            if (!data.error) {
                const filteredRequests = requestData.filter(element => element.requestId !== id)
                setRequestData(filteredRequests)
            }

        } catch (error) {
            console.log('Error deleting pet:', error)
        }
    }

    return (
        <div>
            <h3>REQUESTS</h3>
            <AddButton addClick={addRequestRow} />
            <table>
                <thead>
                    <RequestHeader />
                </thead>
                <tbody>
                    {requestData.map((item) => (
                        <tr key={item.requestId}>
                            <td> {item.requestId} </td>
                            <td> {item.createdAt} </td>
                            {/* <td> {item.status} </td> */}
                            <RequestStatus
                                isEditing={false}
                                value='OPEN'
                            />
                            {/* <td> {item.description} </td> */}
                            <RequestRow
                                initialReqData={{
                                    description: item.description
                                }}
                                initialEditing={false}
                                deleteFunc={() => deleteRequestRow(item.requestId)}
                            />
                        </tr>
                    ))}
                </tbody>
                {/* <tfoot>
                    <AddButton />
                </tfoot> */}
            </table>
        </div>
    )
}




// return (
//     <div>
//         <h3>REQUESTS</h3>
//         <table>
//             <tr>
//                 <th>Request ID</th>
//                 <th>Status</th>
//                 <th>Description</th>
//                 <th>Date Created</th>
//                 <th></th>
//             </tr>
//             <tbody>
//                 {requestData.map((item) => (
//                     <tr key={item.requestId}>
//                         <td> {item.requestId} </td>
//                         <td> {item.status} </td>
//                         <td> {item.description} </td>
//                         <td> {item.createdAt} </td>
//                         <td> <button>Edit</button> <button>Delete</button>
//                             {/* <button>Save</button> */}
//                         </td>
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//     </div>
// )
// }