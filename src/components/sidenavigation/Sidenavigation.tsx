import { INavLinkGroup } from "@fluentui/react";
import { IconButton, Nav } from "office-ui-fabric-react";
import React, { Component } from "react";
import "./Sidenavigation.scss";

const navLinkGroups: INavLinkGroup[] = [
    {
        links: [
            {
                name: "My Day",
                url: "",
                key: "key1",
                isExpanded: true,
                icon: "Sunny",
                target: "_blank",
            },
            {
                name: "Important",
                url: "",
                key: "key2",
                isExpanded: true,
                icon: "FavoriteStar",
                target: "_blank",
            },
            {
                name: "Planned",
                url: "",
                key: "key3",
                isExpanded: true,
                icon: "Calendar",
                target: "_blank",
            },
            {
                name: "Assigned to you",
                url: "",
                key: "key4",
                isExpanded: true,
                icon: "Contact",
                target: "_blank",
            },
            {
                name: "Flagged email",
                url: "",
                key: "key5",
                isExpanded: true,
                icon: "Flag",
                target: "_blank",
            },
            {
                name: "Tasks",
                url: "",
                key: "key6",
                isExpanded: true,
                icon: "Home",
                target: "_blank",
            },
        ],
    },
];

export class Sidenavigation extends Component {
    render() {
        return (
            <nav className="sidenavigation">
                <div className="nav-container">
                <div className="navigation-toolbar">
                    <IconButton iconProps={{ iconName: 'ChevronLeft' }} title="Toggle Navigation" ariaLabel="Toggle Navigation" />
                </div>
                <Nav groups={navLinkGroups} />
                </div>
                <div className="application-footer">
                    <IconButton iconProps={{ iconName: 'Mail' }} title='Mail' ariaLabel='Mail' />
                    <IconButton iconProps={{ iconName: 'Calendar' }} title='Calendar' ariaLabel='Calendar' />
                    <IconButton iconProps={{ iconName: 'People' }} title='Contacts' ariaLabel='Contacts' />
                    <IconButton iconProps={{ iconName: 'ToDoLogoOutline' }} title='To Do' ariaLabel='To Do' />
                </div>
            </nav>
        );
    }
}
