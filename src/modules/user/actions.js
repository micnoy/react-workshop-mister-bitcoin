import UserService from "./UserService";

const setUser = (user) => {
    return {type: 'SET_USER', user: user}
};

export const loadUser = () => {
    return async (dispatch) => {
        const user = await UserService.getUser();
        return dispatch(setUser(user))
    }
};