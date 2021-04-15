import "./App.scss";
import { Header } from "./components/header/Header";
import { initializeIcons } from "@uifabric/icons";
import { loadTheme } from "@uifabric/styling";
import { Sidenavigation } from "./components/sidenavigation/Sidenavigation";
import { Customizer } from "@uifabric/utilities";
import { FluentCustomizations } from "@uifabric/fluent-theme";
import { IconButton, TextField } from "office-ui-fabric-react";
import React, { useState } from 'react';
import { ListItem } from "./components/ListItem/ListItem";

initializeIcons();

loadTheme({
    palette: {
        themePrimary: "#0078d4",
        themeLighterAlt: "#eff6fc",
        themeLighter: "#deecf9",
        themeLight: "#c7e0f4",
        themeTertiary: "#71afe5",
        themeSecondary: "#2b88d8",
        themeDarkAlt: "#106ebe",
        themeDark: "#005a9e",
        themeDarker: "#004578",
        neutralLighterAlt: "#faf9f8",
        neutralLighter: "#f3f2f1",
        neutralLight: "#edebe9",
        neutralQuaternaryAlt: "#e1dfdd",
        neutralQuaternary: "#d0d0d0",
        neutralTertiaryAlt: "#c8c6c4",
        neutralTertiary: "#a19f9d",
        neutralSecondary: "#605e5c",
        neutralPrimaryAlt: "#3b3a39",
        neutralPrimary: "#323130",
        neutralDark: "#201f1e",
        black: "#000000",
        white: "#ffffff",
    },
});

function App() {
    const initList = [
        {
            content: "List 1",
            completed: true,
            favorite: true
        },
        {
            content: "List 2",
            completed: false,
            favorite: true
        },
        {
            content: "List 3",
            completed: false,
            favorite: true
        }
    ]

    const [myDay, setMyDay] = useState(initList);
    const [listInput, setListInput] = useState('');

    console.log(initList);

    function addToList(e) {
        setListInput(e.target.value);
        console.log(e);
        if (e.keyCode === 13) {

            const list = [...myDay];
            list.push(
                {
                    content: e.target.value,
                    completed: false,
                    favorite: false
                }
            );
            setMyDay(list);
            setListInput('');
        }
    }

    function handleListInput(event) {
        setListInput(event.target.value);
    }

    function setItemCompletion(index) {
        const list = [...myDay];
        list[index].completed = !list[index].completed;
        setMyDay(list);
    }

    function setItemFavorited(index) {
        const list = [...myDay];
        list[index].favorite = !list[index].favorite;
        setMyDay(list);
    }

    return (
        <Customizer {...FluentCustomizations}>
            <Header />
            <main>
                <Sidenavigation />
                <div className="todo-container">
                    <div className="todo-toolbar">
                        <div className={"toolbar-title layout-row"}>
                            <h2>My Day</h2>
                            <IconButton iconProps={{ iconName: 'More' }} title="List Options" ariaLabel="List Options" className='list-options' />
                        </div>
                        <div className="toolbar-subtitle">
                            <span>{new Date().toLocaleString('en-us', {weekday:'long', month: 'long', day: 'numeric'})}</span>
                        </div>
                    </div>
                    <TextField placeholder="Add a task" onChange={handleListInput} value={listInput} onKeyDown={addToList} underlined iconProps={{iconName: 'Add'}}/>
                    {/* <p>Some list content...</p> */}
                    <div>
                        {
                            myDay.map((item, index) => {
                                return <ListItem setCompleted={() => setItemCompletion(index)} setFavorited={() => setItemFavorited(index)} favorite={item.favorite} content={item.content} completed={item.completed}/>
                            // return <p key={index}>{item}</p>
                        })}
                    </div>

                </div>
            </main>
        </Customizer>
    );
}

export default App;
