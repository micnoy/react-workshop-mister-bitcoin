import React, {Component} from 'react';
import ContactList from "../../components/ContactList/ContactList";
import {Link} from "react-router-dom";
import ContactsFilter from "../../components/ContactFilter/ContactFilter";

class ContactPage extends Component {
    state = {
        filter: '',
    };

    filterChanged = (ev) => {
        ev.persist();
        this.setState({filter: ev.target.value});
    };

    render() {
        return (
            <div>
                <ContactsFilter onFilter={this.filterChanged}/>
                <Link to={'/contact/edit/'}>
                    <h3>Add new contact</h3>
                </Link>
                <ContactList filter={this.state.filter}/>
            </div>
        );
    }
}

export default ContactPage;