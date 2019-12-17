import React, {Component} from 'react';
import ContactService from "../../services/ContactService";
import {Link} from "react-router-dom";
import avatar from "../../assets/man.svg";
import Avatar from "../../components/Avatar/Avatar";

class ContactDetailsPage extends Component {
    componentDidMount() {
        const contactId = this.props.match.params.id;
        ContactService.getContactById(contactId).then((value) => this.setState({contact: value}));
    }

    state = {
        contact: ''
    };

    deleteContact = (id) => {
        ContactService.deleteContact(id).then(() => this.props.history.goBack());
    };

    render() {
        const {contact} = this.state;

        return (
            <div>
                <h1>Contact details page</h1>
                <Avatar contact={contact}/>
                <h3>Name</h3>
                <h6>{contact.name}</h6>

                <h3>Phone</h3>
                <h6>{contact.phone}</h6>

                <h3>Email</h3>
                <h6>{contact.email}</h6>

                <Link to={'/contact/edit/' + contact._id}>
                    <button>Edit</button>
                </Link>

                <button onClick={()=>this.deleteContact(contact._id)}>Delete</button>

                <Link to={'/contact/'}>
                    <button>Cancel</button>
                </Link>
            </div>
        );
    }
}

export default ContactDetailsPage;