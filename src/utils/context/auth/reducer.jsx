import { LOGIN, LOGOUT } from './type';
const reducer = (state, action) => {
    switch (action.type) {
        case LOGIN:
            const newUser = action.payload;
            return { ...state, user: newUser };
        case LOGOUT:
            return { ...state, user: null };
        default:
            return state;
    }
};

export default reducer;
