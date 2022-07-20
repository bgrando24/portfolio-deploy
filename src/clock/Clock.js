import React from 'react';

export class Clock extends React.Component {
    constructor() {
        super();

        this.state = { time: new Date() };
    }

    componentDidMount() {

        setInterval(
            () => { 
                this.setState( { date: new Date() } )
        }, 
        1000 );
    }

    render() {
        return(
            <div>
                {this.state.time.toLocaleTimeString()}
                </div>
        );
    }
};