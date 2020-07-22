import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { connect } from 'react-redux';
import { setUser } from '../redux/actions/userActions';
import keys from '../config';

const Login = ({ setUser }) => {

    const responseGoogle = (response) => {
        console.log(response);
        if (!response.error) {
            setUser({ ...response.profileObj, ...response.tokenObj });
        }
        console.error(response.error);

    };

    return (
        <>
            <GoogleLogin
                clientId={keys.CLIENT_ID}
                render={renderProps => (
                    <button className="btn google-login-button" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                        <img className="pr-2" src="https://img.icons8.com/color/28/000000/google-logo.png" alt="Google icon" />Sign in with Google</button>
                )}
                buttonText=""
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                scope="https://www.googleapis.com/auth/youtube"
                cookiePolicy={'single_host_origin'}
            />,
        </>
    );
};

export default connect(null, { setUser })(Login);
