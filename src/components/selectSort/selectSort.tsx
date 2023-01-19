import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import s from './SelectSort.module.css'

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

export const SelectSort = () => {
    return (
            <Box width='256px'  component="form">
                <div>
                    <TextField className={s.text}
                               id="outlined-select-currency"
                               select
                               defaultValue="1"
                               fullWidth
                               sx = {{width:'256px', height:'36px'}}
                    >
                        {values.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
            </Box>
    )
}