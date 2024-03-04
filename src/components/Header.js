import { useState } from "react";
import { HEADER_LOGO_URL } from "../utils/constant";
const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    console.log('rendered');
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={HEADER_LOGO_URL} alt=""></img>
            </div>
            <div className="nav-item">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Cart</li>
                    <button onClick={() => {
                        btnName=="Login"?setBtnName('Logout'):setBtnName('Login');
                    }}>{ btnName}</button>
                </ul>
            </div>
        </div>
     
    );
};

export default Header;