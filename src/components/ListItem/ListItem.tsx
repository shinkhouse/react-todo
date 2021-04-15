import { IconButton } from 'office-ui-fabric-react';
import React from 'react';
import "./ListItem.scss";

export interface ListItemProps {
    content: string;
    type: string;
    favorite: boolean;
    completed: boolean;
    setCompleted: () => {};
    setFavorited: () => {};
}

export const ListItem = ({content, type, completed, favorite, setCompleted, setFavorited}: ListItemProps) => {
    return (<div className="list-item">
        <IconButton onClick={setCompleted} iconProps={{ iconName: completed ? 'CompletedSolid' : 'LocationCircle' }} title="Settings" ariaLabel="Settings"/>
        <p>{content}</p>
        <div className="flex"></div>
        <IconButton onClick={setFavorited} iconProps={{ iconName: favorite ? 'FavoriteStarFill' : 'FavoriteStar' }} title="Settings" ariaLabel="Settings"/>
    </div>)
}