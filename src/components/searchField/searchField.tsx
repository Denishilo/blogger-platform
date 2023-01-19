import SearchIcon from "@mui/icons-material/Search";
import {styled} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import s from './Input.module.css'

// const Search = styled('div')((theme) => ({
//     position: 'relative',
//     borderRadius: '5px',
//     border: 'solid 1px #DEDBDC',
//     width: '672px',
//     height:'40px',
// }));

// const SearchIconWrapper = styled('div')(({theme}) => ({
//     paddingLeft: '16px',
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     color: '#ADABAC',
// }));

// export const SearchField = () => {
//     return (
//         <Search>
//             <SearchIconWrapper>
//                 <SearchIcon/>
//             </SearchIconWrapper>
//             <InputBase
//                 className={s.input}
//                 placeholder="Search…"
//                 inputProps={{'aria-label': 'search'}}/>
//         </Search>
//     );
// }

const Search = styled('div')(({theme}) => ({
    border: 'solid 1px #DEDBDC',
    position: 'relative',
    borderRadius: '5px',
    // width: '665px',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: '665px',
        height: '36px',
        margin:'0px'
    },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    paddingLeft: '16px',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ADABAC',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    },
    width: '100%',
}));

export const SearchField = () => {
    return (
        <Search>
            <SearchIconWrapper>
                <SearchIcon/>
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Search…"
                inputProps={{'aria-label': 'search'}}
            />
        </Search>

    );
}