import { useState } from "react";
// import Select from 'react-select';

export const RequestStatus = ({ isEditing, value, onValueChange }) => {
    // const [select, setSelected] = useState(null);

    // const options = [
    //     { value: "Open", label: "Open" },
    //     { value: "Under Review", label: "Under Review" },
    //     { value: "Need More Info", label: "Need More Info" },
    //     { value: "Scheduled", label: "Scheduled" },
    //     { value: "Closed", label: "Closed" }
    // ]

    // const handleChange = (selectedOption) => {
    //     setSelected(selectedOption);
    //     console.log('Selcted:', selectedOption)
    // }


    return isEditing ? (
        // <td>
        //     <Select
        //         value={value}
        //         // options={options}
        //         onChange={(event) => onValueChange(event.target.value)}
        //         // onChange={handleChange}
        //         autoFocus={true}
        //     />
        // </td>
        <td>
            <select
                name="status"
                value={value}
                onChange={(event) => onValueChange(event.target.value)}
                autoFocus={true}
            >
                <option value="Open">Open</option>
                <option value="Under Review">Under Review</option>
                <option value="Need More Info">Need More Info</option>
                <option value="Scheduled">Scheduled</option>
                <option value="Closed">Closed</option>
            </select>
        </td>
    ) : (
        <td>
            {value}
        </td>
    )
}
