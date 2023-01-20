import SearchIcon from "@mui/icons-material/Search";
import {styled} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const Search = styled('div')(({theme}) => ({
    border: 'solid 1px #DEDBDC',
    position: 'relative',
    borderRadius: '5px',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: '665px',
        margin:'0px',
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
        padding: theme.spacing("12px", 1, 1, 0),
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