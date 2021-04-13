import React, { Component } from "react";
import './Header.scss';
import {IconButton, Persona, PersonaPresence, PersonaSize, SearchBox} from 'office-ui-fabric-react';

export class Header extends Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <header>
                <div className="header-row">
                    <IconButton iconProps={{ iconName: 'WaffleOffice365' }} title="Applications" ariaLabel="Applications" className='applications' />
                    <h1>To Do</h1>
                    <div className="flex"></div>
                    <SearchBox placeholder="Search"></SearchBox>
                    <div className="flex"></div>
                    <IconButton iconProps={{ iconName: 'Settings' }} title="Applications" ariaLabel="Applications" className='applications' />
                    <IconButton iconProps={{ iconName: 'Help' }} title="Applications" ariaLabel="Applications" className='applications' />
                    <IconButton iconProps={{ iconName: 'Megaphone' }} title="Applications" ariaLabel="Applications" className='applications' />
                    <IconButton>
                        <Persona imageUrl="https://media-exp1.licdn.com/dms/image/C4E03AQHVxe_tPw6VTQ/profile-displayphoto-shrink_200_200/0/1517433478778?e=1623888000&v=beta&t=NchUZXrR_uIhY42X4ILv_YCX2941CQYQQApuJT7HYrU" presence={PersonaPresence.online} hidePersonaDetails={true} size={PersonaSize.size32} />
                    </IconButton>
                </div>
            </header>
        );
    }
}
