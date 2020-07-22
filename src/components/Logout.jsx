import React from 'react';
import { GoogleLogout } from 'react-google-login';
import keys from '../config';
import { logoutUser } from "../redux/actions/userActions";
import { connect } from "react-redux";

const Logout = ({ logoutUser }) => {

    const handleLogoutSuccess = () => {
        logoutUser();
        window.alert("Logout Successfully...Thank you...See you again");
    };

    const handleLogoutFailure = (err) => {
        console.log(err);
    };

    return (
        <>
            <GoogleLogout
                clientId={keys.CLIENT_ID}
                render={renderProps => (
                    <button className="btn google-logout-button" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                        <img className="pr-2" src="https://img.icons8.com/color/28/000000/google-logo.png" alt="Google icon" />Sign out</button>
                )}
                buttonText=""
                onLogoutSuccess={handleLogoutSuccess}
                onFailure={handleLogoutFailure}
            >
            </GoogleLogout>
        </>
    );
};

export default connect(null, { logoutUser })(Logout);
