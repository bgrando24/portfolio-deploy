import React, {useState} from 'react';

export function TechMenu_View(props) {

    return (
        <div>
            <h1>My favourite technology is {props.tech}!</h1>
        </div>
    );
}