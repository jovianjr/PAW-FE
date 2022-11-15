// Contexts.js
import { createContext, useReducer } from 'react';
import { LOGIN, LOGOUT } from './type';
import reducer from './reducer';

const initialState = { user: null };

export const AuthContext = createContext(initialState);
export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = {
        user: state,
        login: val => dispatch({ type: LOGIN, payload: val }),
        logout: val => dispatch({ type: LOGOUT, payload: val })
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};
