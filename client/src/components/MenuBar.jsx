import React,{useContext} from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import userContext from '../context/userContext';
import { useNavigate } from "react-router-dom";

//Copied code from React Material UI
const MenuBar = () => {

    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
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
               <p style={{color:"white",fontSize:"14px",marginLeft:"10px",marginRight:"10px",textTransform:"lowercase"}}><span style={{textTransform:"uppercase"}}>M</span>ore</p>
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
                <MenuItem style={{width:"200px",fontSize:"14px"}} >Notification Preferences</MenuItem>
                <MenuItem style={{width:"200px",fontSize:"14px"}}>Sell On flipkart</MenuItem>
                <MenuItem style={{width:"200px",fontSize:"14px"}}>24x7 Customer Care</MenuItem>
                <MenuItem style={{width:"200px",fontSize:"14px"}}>Advertise</MenuItem>
                <MenuItem style={{width:"200px",fontSize:"14px"}} onClick={()=>navigate('/downloadapp')}>Download App</MenuItem>
                <MenuItem style={{width:"200px",fontSize:"14px"}} onClick={()=>navigate('/myorders')}>Your Orders</MenuItem>

            </Menu>


        </div>
    );
















}
export default MenuBar