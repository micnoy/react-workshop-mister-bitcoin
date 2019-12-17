import React, {Component} from 'react';

class ContactsFilter extends Component {
    render() {
        const {onFilter} = this.props;
        return (
            <div>
                <input placeholder='Search for contact' onChange={(ev) => onFilter(ev)}/>
            </div>
        );
    }
}

export default ContactsFilter;