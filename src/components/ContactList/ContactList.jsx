import React, {Component} from 'react';
import ContactService from "../../services/ContactService";
import ContactPreview from "../ContactPreview/ContactPreview";


export default class ContactList extends Component {

    state = {
        contacts: ''
    };

    getContactItem = (index, item, filter) => {
        if (filter) {
            if (item.name.toLowerCase().includes(filter.toLowerCase())) {
                return (
                    <li key={index}>
                        <ContactPreview contact={item}/>
                    </li>);
            }
        } else {
            return (
                <li key={index}>
                    <ContactPreview contact={item}/>
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