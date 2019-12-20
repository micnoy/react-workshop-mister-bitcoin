import React, {Component} from 'react';
import ContactList from "../../components/ContactList/ContactList";
import {Link} from "react-router-dom";
import ContactsFilter from "../../components/ContactFilter/ContactFilter";
import {loadContacts} from "../../modules/contact/actions";
import {connect} from 'react-redux'

class ContactPage extends Component {
    componentDidMount() {
        this.props.loadContacts();
    }

    state = {
        filter: '',
    };

    filterChanged = (ev) => {
        ev.persist();
        this.setState({filter: ev.target.value});
    };

    render() {
        const {contacts} = this.props;
        return (
            <section className="nav-page">
                <ContactsFilter onFilter={this.filterChanged}/>
                <Link to={'/contact/edit/'}>
                    <h3>Add new contact</h3>
                </Link>
                <ContactList contacts={contacts} filter={this.state.filter}/>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        contacts: state.contactStore.contacts
    }
};

const mapDispatchToProps = {
    loadContacts
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactPage)