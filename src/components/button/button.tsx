import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import s from './Button.module.css'

export const BasicButton = () =>{
    return (
        <div >
            <Stack direction="row" spacing={2}>
                <Button className={s.button} variant="outlined" endIcon={<ExpandMoreIcon/>} color={'inherit'}>
                    Show more
                </Button>
            </Stack>
        </div>
    );
}