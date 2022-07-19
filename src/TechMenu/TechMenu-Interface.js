import React from 'react';

// The tech menu interface handles allowing the user to change the parent's state
export class TechMenu_Interface extends React.Component {
    constructor() {
        super();

        this.handleTechChange = this.handleTechChange.bind(this);
    }

    // This method handles the fact that the 'handleClick' method is given an event object due to event listener
    handleTechChange(e) {
        const newTech = e.target.value;
        this.props.onClick(newTech);
    }

    render() {
        return(
            <div className='techmenu-items-div'>
                <button onClick={this.handleTechChange} value="HTML">HTML</button>
                <br/>
                <button onClick={this.handleTechChange} value="CSS">CSS</button>
                <br/>
                <button onClick={this.handleTechChange} value="JavaScript">JavaScript</button>
                <br/>
                <button onClick={this.handleTechChange} value="React">React</button>
                <br/>
             </div>
        );
    }

};