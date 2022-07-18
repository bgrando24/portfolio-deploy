import React from "react";


class TechMenuItems extends React.Component {

    handleClick() {
        window.alert("hi!");
    }

    render () {
        return (
        <div class='techmenu-items-div'>
            <button onClick = {this.handleClick}>HTML & CSS</button>
            <br/>
            <button>JavaScript</button>
            <br/>
            <button>React</button>
        </div>
        );
    }
};





function TechMenu() {
    return(
        <div class='techmenu-div'>
            <h3>Tech Menu</h3>
            <TechMenuItems />
        </div>
    );
};


export default TechMenu;