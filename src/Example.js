import React, { useState } from 'react';
import { MyContext, MyProvider } from './MyContext'; // Correct names
import Mycomponent from './Mycomponent';
import Header from './components/Header';
import Login from './components/Login';

export default function Example() {
    const [text, setText] = useState("");

    return (
        <MyProvider>
            <MyContext.Provider value={{ text, setText }}>
                <div>
                    <Header />
                    <Login />
                    <Mycomponent />
                </div>
            </MyContext.Provider>
        </MyProvider>
    );
}
