import axios from "axios"
import { useState, useEffect } from "react"


export const Admin = () => {
    const [adminRequestsData, setAdminRequestsData] = useState([]);
    const [adminEdit, setAdminEdit] = useState(false);

    const changeEditMode = () => { setAdminEdit(true) }
    const changeNonEdit = () => { setAdminEdit(false) }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/admin')
                setAdminRequestsData(response.data)
            } catch (error) {
                console.log("Error getting admin requests!", error)
            }
        }

        fetchData();
    }, [])

    return !adminEdit ? (
        <>
            <h3>Admin</h3>
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
                            <td> {item.status} </td>
                            <td> {item.description} </td>
                            <td>
                                <button> Edit </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    ) : (
        <>
            <h3>Admin</h3>
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
                                // value={value}
                                // onChange={(event) => onValueChange(event.target.value)}
                                // autoFocus={true}
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
                                    placeholder="Tell us about the issue you're having"
                                // value={value}
                                // onChange={(event) => onValueChange(event.target.value)}
                                />

                            </td>
                            <td>
                                <button> Save </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
