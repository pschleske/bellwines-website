import { useState } from "react";
import { Td, Select, Badge } from '@chakra-ui/react';
// import Select from 'react-select';

export const RequestStatus = ({ isEditing, value, onValueChange }) => {
    const colorMap = {
        Open: 'blue',
        OPEN: 'blue',
        'Under Review': 'yellow',
        'UNDER REVIEW': 'yellow',
        'Need More Info': 'red',
        'NEED MORE INFO': 'red',
        Scheduled: 'purple',
        SCHEDULED: 'purple',
        Closed: 'whatsapp',
        CLOSED: 'whatsapp'
    }
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
        <Td>
            <Select
                name="status"
                value={value}
                onChange={(event) => onValueChange(event.target.value)}
                autoFocus={true}
                variant='outline'
            >
                <option value="Open"> Open </option>
                <option value="Under Review">Under Review</option>
                <option value="Need More Info">Need More Info</option>
                <option value="Scheduled">Scheduled</option>
                <option value="Closed">Closed</option>
            </Select>
        </Td>
    ) : (
        <Td>
            <Badge size='lg' colorScheme={colorMap[value]}> {value} </Badge>
        </Td>
    )
}
