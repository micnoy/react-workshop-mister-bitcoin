import React from 'react';

const ContactsFilter = (props) => {
    const {onFilter} = props;
    return (
        <input placeholder='Search for contact' onChange={(ev) => onFilter(ev)}/>
    );
};

export default ContactsFilter;