import React from "react";
import { TechMenu_Interface } from "./TechMenu-Interface";
import { TechMenu_View } from "./TechMenu-View";






// The TechMenu_Parent controls the state of the tech menu data (what is to be displayed)
export class TechMenu_Parent extends React.Component {

    // used for setting a random tech in the 'TechMenu-View' 
    techArray = ["HTML", "CSS", "JavaScript", "React"]

    // generates random index number used to pick a technology string from above array
    randomTech = Math.floor(Math.random() * this.techArray.length);

    constructor() {
        super();
        this.state = { technology: this.techArray[this.randomTech] };

        // necessary for the below method
        this.handleClick = this.handleClick.bind(this);
    }

    // event handler sets the state of the 'technology' state property
    // This will be passed to the interface component as a prop
    handleClick(tech) {
        this.setState( {technology: tech} );
    }


    render() {
        return (
            <div className='techmenu-div'>
                <TechMenu_View tech={this.state.technology} />

                <TechMenu_Interface onClick={this.handleClick} />
            </div>
        );
    }
};
    