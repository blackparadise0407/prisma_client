import {
    Chat,
    Dashboard,
    FriendAdd,
    Profile,
    Setting,
    User,
} from 'assets/icons';
import React from 'react';

const Home = () => {
    return (
        <div>
            Home Hello
            <FriendAdd size={20} color="red" />
            <Chat size={20} color="red" />
            <Dashboard size={20} color="red" />
            <Profile size={20} color="red" />
            <User size={20} color="red" />
            <Setting size={20} color="red" />
        </div>
    );
};

export default Home;
