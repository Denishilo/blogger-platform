import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import s from './SelectSort.module.css'


export const SelectSort = () => {
    return (
        <div className={s.selectFilterWrapper}>
                <FormControl fullWidth size="small">
                    <Select className={s.select}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={''}
                        onChange={()=>{}}
                    >
                        <MenuItem value={10}>Old blogs first</MenuItem>
                        <MenuItem value={20}>From A to Z</MenuItem>
                        <MenuItem value={30}>From Z to A</MenuItem>
                    </Select>
                </FormControl>
        </div>
    )
}