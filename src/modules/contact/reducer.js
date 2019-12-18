const INITIAL_STATE = {
    contacts: null,
    currentContact: null
};

export default function contactReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_CONTACTS':
            return {
                ...state,
                contacts: action.contacts
            };
        case 'SET_CURRENT_CONTACT':
            return {
                ...state,
                currentContact: action.contact
            };
        case 'CLEAR_CURRENT_CONTACT':
            return{
                ...state,
                currentContact: null
            };
        default:
            return state;
    }
}