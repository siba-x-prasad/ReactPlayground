import { useState } from "react";


const  ShowHideComponent = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        setVisible(!visible);
    }

    return (
        <div>
            <button onClick={toggleVisibility}>
                {visible ? "Hide" : "Show"} Content
            </button>
            {visible && (
                <div>
                    <h1>This is the content to show or hide</h1>
                    <p>You can put any content here.</p>
                </div>
            )}
        </div>
    );

};

export default ShowHideComponent;