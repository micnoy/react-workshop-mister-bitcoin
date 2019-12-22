import React, {Component} from 'react';
import ContactService from "../../modules/contact/ContactService";
import {Link} from "react-router-dom";
import Avatar from "../../components/Avatar/Avatar";

import {connect} from "react-redux";
import {clearCurrentContact, loadCurrentContact} from "../../modules/contact/actions";

class ContactDetailsPage extends Component {

    componentDidMount() {
        const contactId = this.props.match.params.id;
        console.log('loading id', contactId);
        this.props.loadCurrentContact(contactId);
    }

    componentWillUnmount() {
        this.props.clearCurrentContact();
    }

    deleteContact = (id) => {
        ContactService.deleteContact(id).then(() => this.props.history.goBack());
    };

    render() {
        const {contact} = this.props;

        return (contact?
            <div className='nav-page'>
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

                <button onClick={() => this.deleteContact(contact._id)}>Delete</button>

                <Link to={'/contact/'}>
                    <button>Cancel</button>
                </Link>
            </div>:
            (
                <div>
                    <h1>Contact does not exist</h1>
                </div>)
        );
    }
}

const mapStateToProps = (state) => {
    console.log('state ', state);
    return {
        contact: state.contactStore.currentContact
    }
};

const mapDispatchToProps = {
    loadCurrentContact,
    clearCurrentContact
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactDetailsPage);
