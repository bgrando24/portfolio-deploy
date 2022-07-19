import React from 'react';

export class TechMenu_View extends React.Component {

    render() {
        return(
            <div>
                <h1>My favourite technology is {this.props.tech}!</h1>
            </div>
        );
    }
};