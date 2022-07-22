import React from 'react';

export function TechMenu_Interface(props) {

    function handleClick(e) {
        const newTech = e.target.value;
        props.onClick(newTech);
    }

    return (
        <div className='techmenu-items-div'>
            <button onClick={handleClick} value="HTML">HTML</button>
                <br/>
            <button onClick={handleClick} value="CSS">CSS</button>
                <br/>
            <button onClick={handleClick} value="JavaScript">JavaScript</button>
                <br/>
            <button onClick={handleClick} value="React">React</button>
                <br/>
        </div>
    );
}