import React, {Component} from 'react';
import ContactPreview from "../ContactPreview/ContactPreview";


export default class ContactList extends Component {

    getContactItem = (index, item, filter) => {
        if (filter) {
            if (item.name.toLowerCase().includes(filter.toLowerCase())) {
                return (
                    <li className='contact-item' key={index}>
                        <ContactPreview contact={item}/>
                    </li>);
            }
        } else {
            return (
                <li className='contact-item' key={index}>
                    <ContactPreview contact={item}/>
                </li>);
        }
    };

    render() {
        const {contacts} = this.props;
        const {filter} = this.props;

        return <div>
            <ul>
                {contacts && contacts.map((item, index) => this.getContactItem(index, item, filter))}
            </ul>
        </div>;
    }
}