import React, { useContext } from 'react';
import { MyContext } from './MyContext'; // Correct name

export default function Mycomponent() {
    const { text, setText } = useContext(MyContext);

    return (
        <div>
            <h1>{text}</h1>
            <button onClick={() => setText("Hello world")}>Click</button>
        </div>
    );
}
