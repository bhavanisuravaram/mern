// Mycontext.js
import React, { createContext, useState } from 'react';

// Correct export names
export const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const [users, setUsers] = useState([]);

    const registerUser = (user) => {
        setUsers([...users, user]);
    };

    return (
        <MyContext.Provider value={{ users, registerUser }}>
            {children}
        </MyContext.Provider>
    );
};
