import React, {Component} from 'react';
import ContactPreview from "../ContactPreview/ContactPreview";


export default class ContactList extends Component {

    getContactItem = (index, item, filter) => {
        if (!filter) {
            // If no filter return all contacts
            return this.singleContact(index, item);
        } else if (item.name.toLowerCase().includes(filter.toLowerCase())) {
            // If there's a filter applied, check if this item matches the filter.
            return this.singleContact(index, item);
        }

    };

    singleContact(index, item) {
        return (
            <li className='li-item-container' key={index}>
                <ContactPreview contact={item}/>
            </li>);
    }

    render() {
        const {contacts} = this.props;
        const {filter} = this.props;

        return <div>
            <ul className='contacts-list'>
                {contacts && contacts.map((item, index) => this.getContactItem(index, item, filter))}
            </ul>
        </div>;
    }
}