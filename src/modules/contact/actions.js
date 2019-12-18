import ContactService from "./ContactService";

const setContacts = (contacts) => {
    return {type: 'SET_CONTACTS', contacts}
};

export const loadContacts = () => {
    return async (dispatch) => {
        const contacts = await ContactService.getContacts();
        return dispatch(setContacts(contacts));
    };
};

const setCurrentContact = (contact) => {
    console.log('setCurrentContact', contact);
    return {type: 'SET_CURRENT_CONTACT', contact}
};

export const loadCurrentContact = (id) => {
    console.log('loadCurrentContact', id);
    return async (dispatch) => {
        const contact = await ContactService.getContactById(id);
        return dispatch(setCurrentContact(contact));
    };
};

export const clearCurrentContact = () => {
    return {type: 'CLEAR_CURRENT_CONTACT'}
};
