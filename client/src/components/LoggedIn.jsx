import React,{useContext} from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import userContext from '../context/userContext';

const LoggedIn = ({ name }) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        a.updateUser()
    };
    
 //getting value of userStatus whether User is Logged in or not
 const a = useContext(userContext);

    return (
    
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
               <p style={{color:"white"}}>{name}</p>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem> */}
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </div>
    );
















}
export default LoggedIn