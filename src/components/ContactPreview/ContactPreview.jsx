import React from 'react';
import {Link} from "react-router-dom";
import Avatar from "../Avatar/Avatar";

const ContactPreview = (props) => {
    const {contact} = props;
    return (
        <Link to={'/contact/' + contact._id} className="item-content">
                <Avatar contact={contact}/>
                <h2>{contact.name}</h2>
        </Link>
    );
};

export default ContactPreview;