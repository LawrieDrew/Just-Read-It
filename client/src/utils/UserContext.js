import React, { createContext, useEffect, useReducer } from "react";

const UserContext = createContext();
const { Provider } = UserContext;

function reducer(state, action) {
    switch (action.type) {
        case "LOGIN":
            return { ...state, user: action.payload };
        case "LOGOUT":
            return { ...state, user: null };
        default:
            return state;
    }
}

function UserProvider({ value = { user: null }, ...props }) {
    const [state, dispatch] = useReducer(reducer, value);

    function loginUser(user) {
        dispatch( { type: "LOGIN", payload: user });
    }

    function logoutUser() {
        dispatch( { type: "LOGOUT", payload: null });
    }

    useEffect( () => {
        fetch('/api/users/checkAuth', {
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json'
			}
        })
        .then( response => {
            if (response.status === 200) {
                return response.json()
            }
        })
        .then( response => {
            loginUser(response);
        });
    }, []);

    const providerValue = {
        ...state,
        loginUser,
        logoutUser
    }

    return <Provider value={providerValue} {...props} />;
}

export { UserProvider, UserContext };
