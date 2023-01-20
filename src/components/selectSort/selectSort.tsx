import React from "react";
import MenuItem from '@mui/material/MenuItem';
import FormControl from "@mui/material/FormControl";
import {Select} from "@mui/material";
import {styled} from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const values = [
    {
        value: '1',
        label: 'Old blogs first',
    },
    {
        value: '2',
        label: 'From A to Z',
    },
    {
        value: '3',
        label: 'From Z to A',
    },

];

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
    },
    '& .MuiInputBase-input': {
        width:'256px',
        borderRadius: 4,
        position: 'relative',
        backgroundColor: "#FAF7F8",
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            "Inter, sans-serif"
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            backgroundColor: "#FAF7F8",
        },
    },
}));

export const SelectSort =()=> {
    const [value, setAge] = React.useState('');
    const handleChange = (event: { target: { value: string } }) => {
        setAge(event.target.value);
    };
    return (
        <div>
            <FormControl sx={{ m: 1, marginRight:'0px'}} variant="standard">
                <Select

                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    value={value}
                    onChange={handleChange}
                    inputProps={{MenuProps: {disableScrollLock: true}}}
                    input={<BootstrapInput />}
                >
                    {values.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                         ))}
                </Select>
            </FormControl>
        </div>
    );
}