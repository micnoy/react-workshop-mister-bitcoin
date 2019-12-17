import React, {Component} from 'react';
import ContactService from "../../services/ContactService";

class ContactEditPage extends Component {

    componentDidMount() {
        const contactId = this.props.match.params.id;
        ContactService.getContactById(contactId).then((value) => this.setState({contact: value}));
    }

    state = {
        contact: null
    };

    render() {
        const {contact} = this.state;
        return (
            <form>
                <h1>Edit contact page</h1>

                <h3>Name</h3>
                <input type='text' onChange={(ev) => this.propertyChanged(ev, 'name')}
                       value={contact && contact.name}/>

                <h3>Phone</h3>
                <input type='phone' onChange={(ev) => this.propertyChanged(ev, 'phone')}
                       value={contact && contact.phone}/>

                <h3>Email</h3>
                <input type='email' onChange={(ev) => this.propertyChanged(ev, 'email')}
                       value={contact && contact.email}/>
                <div>
                    <button onClick={this.goBack}>Cancel</button>
                    <button onClick={this.saveContact}>{contact ? 'Save' : 'Add'}</button>
                </div>
            </form>
        );
    }

    propertyChanged = (ev, field) => {
        ev.persist();
        let newContact = {...this.state.contact};
        newContact[field] = ev.target.value;
        this.setState({contact: newContact});
    };

    saveContact = () => {
        ContactService.saveContact(this.state.contact).then(() => {
            this.props.history.go(-2);
        });
    };

    goBack = () => {
        console.log(this.props.history.goBack());
    };
}

export default ContactEditPage;