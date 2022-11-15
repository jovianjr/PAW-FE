import { LOGIN, LOGOUT } from './type';
const reducer = (state, action) => {
    switch (action.type) {
        case LOGIN:
            const newUser = action.payload;
            return newUser;
        case LOGOUT:
            return null;
        default:
            return state;
    }
};

export default reducer;
