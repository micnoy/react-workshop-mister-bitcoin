import React, {Component} from 'react';
import ContactService from "../../services/ContactService";
import ContactItem from "../ContactItem";


class ContactList extends Component {
    state = {
        contacts: ''
    };

    getContactItem = (index, item, filter) => {
        if (filter) {
            if (item.name.toLowerCase().includes(filter.toLowerCase())) {
                return (
                    <li key={index}>
                        <ContactItem contact={item}/>
                    </li>);
            }
        } else {
            return (
                <li key={index}>
                    <ContactItem contact={item}/>
                </li>);
        }
    };

    componentDidMount() {
        ContactService.getContacts().then(value => {
            this.setState({contacts: value});
        });
    }

    render() {
        const {contacts} = this.state;
        const {filter} = this.props;

        return <div>
            <ul>
                {contacts && contacts.map((item, index) => this.getContactItem(index, item, filter))}
            </ul>
        </div>;
    }
}

export default ContactList;