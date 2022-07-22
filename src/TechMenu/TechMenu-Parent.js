import React, {useState} from 'react';
import { TechMenu_Interface } from './TechMenu-Interface';
import { TechMenu_View } from './TechMenu-View';

export function TechMenu_Parent() {

    // used for setting a random tech in the 'TechMenu-View' 
    const techArray = ["HTML", "CSS", "JavaScript", "React"];

    // generates random index number used to pick a technology string from above array
    let randomTech = techArray[ Math.floor(Math.random() * techArray.length) ];

    const [tech, setTech] = useState(randomTech);   //Initial state

    function handleTechChange(newTech) {
        setTech(newTech);
    }


    return (
        <div className='techmenu-div'>
            <TechMenu_View tech={tech} />

            <TechMenu_Interface onClick={handleTechChange} />
    </div>
    );
};