import React from 'react';

export function TechMenu_Interface(props) {

    return (
        <div className='techmenu-items-div'>
            <button onClick={() => { props.setTech("HTML") }} value="HTML">HTML</button>
                <br/>
            <button onClick={() => { props.setTech("CSS") }} value="CSS">CSS</button>
                <br/>
            <button onClick={() => { props.setTech("JavaScript") }} value="JavaScript">JavaScript</button>
                <br/>
            <button onClick={() => { props.setTech("React") }} value="React">React</button>
                <br/>
        </div>
    );
}