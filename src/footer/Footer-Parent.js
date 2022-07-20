import React from 'react';
import { Footer_View } from './Footer-View';


export class Footer_Parent extends React.Component {
    constructor() {
        super();
        this.state = {};    //Controls the state of the footer
    }

    handleClick(footerItem) {
        this.setState( {} );
    }

    render() {
        return(
            <Footer_View />
        );
    }
};