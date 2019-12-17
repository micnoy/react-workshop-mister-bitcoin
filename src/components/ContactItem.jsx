import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Avatar from "./Avatar/Avatar";

class ContactItem extends Component {
    render() {
        const {contact} = this.props;
        return (
            <Link to={'/contact/' + contact._id}>
                <div className={'contact-item'}>
                    <Avatar contact={contact}/>
                    <h2>{contact.name}</h2>
                </div>
            </Link>
        );
    }
}

export default ContactItem;