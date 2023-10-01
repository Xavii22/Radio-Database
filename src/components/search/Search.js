import React from "react";
import { useRadio } from "../../contexts/hooks/useRadio";
import "./Search.css";

export const Search = () => {
    const {updateName} = useRadio();

    const updateSearchResults = (e) => {
        const newSearchValue = e.target.value;
        updateName(newSearchValue);
    }

    return (
        <div id="search-container">
            <input id="search-bar" type="text" placeholder="Introduce nombre de la radio..." onChange={updateSearchResults}/>
        </div>
    );
};
