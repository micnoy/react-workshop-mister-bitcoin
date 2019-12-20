import React from 'react';

const Avatar = (props) => {
    const {contact} = props;
    const contactImage = 'https://robohash.org/' + contact._id;
    return (
        <div>
            <img className='avatar' src={contactImage} alt=''/>
        </div>
    );
};

export default Avatar;
