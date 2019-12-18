import React, {Component} from 'react';
import ContactService from "../../modules/contact/ContactService";
import {loadCurrentContact} from "../../modules/contact/actions";
import {connect} from "react-redux";

class ContactEditPage extends Component {

    // contactBeingEdited = null;

    componentDidMount() {
        const contactId = this.props.match.params.id;
        this.props.loadCurrentContact(contactId);
    }

    render() {
        const {contact} = this.props;
        return(contact &&
            <form>
                <h1>Edit contact page</h1>
                <h3>Name</h3>
                <input type='text' onChange={(ev) => this.propertyChanged(ev, 'name')}
                       defaultValue={contact.name}/>

                <h3>Phone</h3>
                <input type='phone' onChange={(ev) => this.propertyChanged(ev, 'phone')}
                       defaultValue={contact.phone}/>

                <h3>Email</h3>
                <input type='email' onChange={(ev) => this.propertyChanged(ev, 'email')}
                       defaultValue={contact.email}/>
                <div>
                    <button onClick={this.goBack}>Cancel</button>
                    <button onClick={this.saveContact}>{contact ? 'Save' : 'Add'}</button>
                </div>
            </form>);
    }

    propertyChanged = (ev, field) => {
        ev.persist();
        if(!this.contactBeingEdited) {
            this.contactBeingEdited = {...this.props.contact};
        }
        this.contactBeingEdited[field] = ev.target.value;
        console.log(this.contactBeingEdited);
    };

    saveContact = () => {
        ContactService.saveContact(this.contactBeingEdited).then(() => {
            this.props.history.go(-2);
        });
    };

    goBack = () => {
        // this.props.history.goBack();
    };
}

const mapStateToProps = (state) => {
    return {
        contact: state.contactStore.currentContact
    }
};

const mapDispatchToProps = {
    loadCurrentContact
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactEditPage);