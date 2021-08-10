import React from 'react';
import './styles.scss';

const Loader = () => {
    return (
        <div className="loader">
            <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        // <div
        //     style={{ backgroundColor: '#000', width: '100vw', height: '100vh' }}
        // ></div>
    );
};

export default Loader;
