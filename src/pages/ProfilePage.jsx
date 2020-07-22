import React from 'react';
import { connect } from 'react-redux';
import { mapToPropsUser } from '../redux/mapStateToProps';
import Logout from '../components/Logout';
import '../styles/ProfilePage.css';

const ProfilePage = ({ userObj }) => {
    return (
        <>
            <div className="profile-page-container">
                <div className="profile-container">
                    <img src={userObj.user.imageUrl}
                        style={{ borderRadius: '50%' }} alt="profile" srcSet="" />
                    <h3 className="m-3">{userObj.user.name}</h3>
                    <h6 className="mb-5">{userObj.user.email}</h6>
                    <Logout />
                </div>

            </div>
        </>
    );
};

export default connect(mapToPropsUser)(ProfilePage);


