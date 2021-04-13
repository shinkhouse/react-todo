import React, { Component } from "react";
import './Header.scss';


export class Header extends Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="header">
                <p>To Do</p>
            </div>
        );
    }
}