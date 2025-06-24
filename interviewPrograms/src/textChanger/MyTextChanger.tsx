import { useState } from 'react';

const MyTextChanger = () => {
    const [text, setText] = useState("Hello, World!");

    const changeText = (text: string) => {
        setText(text);
    };

    return (
        <div>
            <h1>{text}</h1>
            <input 
                type="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                placeholder="Type new text here"
                />
        </div>
    );
};

export default MyTextChanger;