import React from 'react';
import {Link} from "react-router-dom";
import Avatar from "../Avatar/Avatar";

const ContactPreview = (props) => {
    const {contact} = props;
    return (
        <Link to={'/contact/' + contact._id} className="item-content">
                <Avatar contact={contact}/>
                <div className='contact-name'>{contact.name}</div>
        </Link>
    );
};

export default ContactPreview;