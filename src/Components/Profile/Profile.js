import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Profile = () => {
    const [user]=useAuthState(auth)
    return (
        <div>
            <h2>Name : {user?.displayName || "Name not set"}</h2>
            <h2>Email : {user?.email || "Email not set"}</h2>
           
        </div>
    );
};

export default Profile;