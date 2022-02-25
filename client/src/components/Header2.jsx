import * as React from 'react';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import userContext from '../context/userContext';
import LoggedIn from './LoggedIn';

const Header2 = () => {


    //getting value of userStatus whether User is Logged in or not
    const a = useContext(userContext);
    

    const outer = {
        color: "#2874f0",
        backgroundColor: "#2874f0",
        height: "55px",
        fontFamily: "Sans-Serif",


    };
    const inner = {
        color: "#2874f0",
        width: "90%",
        height: "55px",
        fontFamily: "Sans-Serif",
        // margin: "auto",
        float: "right",
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    };
    const logodiv = {
        width: "85px",
        height: "75px",
        textDecoration:"none",
        
    };
    const logo = {
        width: "75px",
        margin: "auto",
        paddingTop: "20px",
    };
    const explore = {
        padding: "0px",
        margin: "0px",
        color: "white",
        fontSize: "13px",
        marginTop: "-7px",
        fontFamily:"cursive"
    };
    const searchbar = {
        height: "22px",
        width: "43%",
        marginRight: "20px",
        marginLeft:"12px",
        padding: "4px",
    };
    const login = {
        padding: "4px 8px",
        color: "#2874f0",
        backgroundColor: "white",

    };
    const loginleft = {
        height: "40vh",
        backgroundColor: "#2874f0",
        width: "35vw",

    };
    const loginDialog = {
        display: "flex",
        flexDirection: "row",

    };
    const loginRight = {
        display: "flex",
        flexDirection: "column",
        padding: "30px 4px",
        justifyContent: "space-around",
        margin: "3px 78px"
    };
    const newbtn = {
        outline: "none",
        border: "none",
        color: "#2874f0"
    };
    const yellowLogin = {
        background: "#fb641b",
        boxShadow: "0 1px 2px 0 rgb(0 0 0 / 20%)",
        border: "none",
        color: "#fff",
        padding: "10px 20px"
    };
    const input = {
        outline: "none",
        border: "none",
        borderBottom: "1px solid #2874f0"
    };
    const tnc = {
        color: "gray",
        fontSize: "12px"
    };
    const loginHeaderBtn = {
        padding: "4px 35px",
        outline: "none",


        color: "#2874f0",
        fontWeight: "700",
        backgroundColor: "#fff",
        cursor: "pointer",
        borderRadius: "2px",
        height: "32px",
        padding: "5px 40px",
        border: "1px solid #dbdbdb"





    };

    //all parameters required of login and signup
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');


    //toggle Login and signup as per user's choice but first login will appear
    const [open, setOpen] = useState(false);
    const [signup, setSignup] = useState(false);

    //function to toggle dialog
    const handleClose = () => {
        setOpen(false)
    }

    // Login Handler 
    const loginHandler = () => {
        if (email == '' || password == '') {
            console.log("fill all the entries")
            return;
        }
        try {
            console.log(email, "ssssss")
            fetch('/login', {
                method: 'post',
                body: JSON.stringify({ email, password }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                return res.json();
            }).then((data) => {
                console.log(data, 'fdsa')
                if (!data.error) {
                    a.updateUser(data.userName);
                    setOpen(false);
                }

            })
        } catch (err) {
            console.log(err)
        }
    }
    //SignIn Handler
    const signinHandler = () => {
        if (email == '' || password == '' || firstName == '' || lastName == '') {
            console.log("fill all the entries")
            return;
        }
        try {
            console.log(email, password, "dsa")
            fetch('/signin', {
                method: 'post',
                body: JSON.stringify({ email, password, firstName, lastName, address }),
                headers: {
                    'content-type': 'application/json'
                }
            }).then((res) => {
                return res.json();
            }).then((data) => {
                a.updateUser(data);
                setOpen(false);
            })
        } catch (err) {
            console.log(err)
        }
    }


    return (
        <>
            <Dialog open={open} onClose={handleClose}>


                {/* //Switch Dialog screen for login and signup  */}
                {/* --------------------------------------------------- */}
                {signup == false ?
                    <div style={loginDialog}>
                        <div style={loginleft}>
                            <p style={{ color: "white", fontWeight: "500", marginLeft: "20px", fontSize: "20px" }}>Login</p>
                            <p style={{ color: "white", fontWeight: "200", marginLeft: "20px", fontSize: "15px" }}>Get access to your Orders, Wishlists and Recommendations</p>
                            <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"></img>
                        </div>
                        <div style={loginRight}>
                            <input onChange={(e) => setEmail(e.target.value)} style={input} type="email" placeholder='Enter Email/Mobile Number'></input>
                            <input onChange={(e) => setPassword(e.target.value)} style={input} type="password" placeholder='Enter Password'></input>
                            <p style={tnc}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</p>
                            <button onClick={() => { loginHandler() }} style={yellowLogin}>Login</button>
                            <button onClick={() => { setSignup(true) }} style={newbtn}>New to Flipkart? Create an account</button>
                        </div>
                    </div>
                    :
                    <div style={loginDialog}>
                        <div style={loginleft}>
                            <p style={{ color: "white", fontWeight: "500", marginLeft: "20px", fontSize: "20px" }}>Looks like you're new here!</p>
                            <p style={{ color: "white", fontWeight: "200", marginLeft: "20px", fontSize: "15px" }}>Sign up with your email to get started</p>
                            <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"></img>
                        </div>
                        <div style={loginRight}>
                            <input style={input} type="text" onChange={(e) => setFirstName(e.target.value)} placeholder='Enter First Name'></input>
                            <input style={input} type="text" onChange={(e) => setLastName(e.target.value)} placeholder='Enter Last Name'></input>
                            <input style={input} type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email/Mobile Number'></input>
                            <input style={input} type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password'></input>
                            <p style={tnc}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</p>
                            <button onClick={() => { signinHandler() }} style={yellowLogin}>Sign Up</button>
                            <button onClick={() => { setSignup(false) }} style={newbtn}>Existing User? Log In</button>
                        </div>
                    </div>
                }
                {/* ---------------------------------------------------------------->  */}
            </Dialog>
            <div className="outer" style={outer}>
                <div className="inner" style={inner}>
                    <Link to="/" style={{textDecoration:"none"}}><div style={logodiv}>
                        <img style={logo} src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"></img>
                        <p style={explore}>Explore Plus
                        <img width="10" src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"></img>
                        </p>
                    </div>
                    </Link>
                    <input style={searchbar} placeholder="Search for products, brands and more "></input>
                   
                    <svg width="20" height="20" viewBox="0 0 17 18" class="" xmlns="http://www.w3.org/2000/svg"><g fill="#2874F1" fill-rule="evenodd"><path class="_34RNph" d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"></path><path class="_34RNph" d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"></path></g></svg>
                    
                    
                    {
                        a.userStatus.status == false ?
                            <>
                                <button style={loginHeaderBtn} onClick={() => setOpen(true)}>Login</button>
                            </>
                            :
                            <>
                                <LoggedIn name={a.userStatus.userName} />
                                {/* <p style={{color:"white",fontWeight:"600"}}>Hey, {a.userStatus.userName}</p> */}
                            </>
                    }

                    <span style={{color:"white",cursor:"pointer",marginRight:"30px",marginLeft:"12px"}}>More
                    
                    
                    
                    
                    </span>

                    <Link to="cart" style={{textDecoration:"none"}}>
                        
                    <svg class="V3C5bO" width="14" height="14" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path class="_1bS9ic" d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff"></path></svg>

                        <span style={{color:"white",textDecoration:"none",cursor:"pointer"}}>Cart</span></Link>
                </div>

            </div>

        </>
    );
}

export default Header2;