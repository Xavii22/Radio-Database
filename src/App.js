import "./App.css";
import React from "react";
import { RadioList } from "./components/radioList/RadioList";
import { Search } from "./components/search/Search";
import { Sort } from "./components/sort/Sort";
import { Title } from "./components/title/Title";

function App() {
    return (
        <>
            <Title />
            <div id="search-parameters">
                <Search />
                <Sort />
            </div>
            <RadioList />
        </>
    );
}

export default App;
