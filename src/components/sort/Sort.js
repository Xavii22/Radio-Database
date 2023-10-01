import React from "react";
import { useRadio } from "../../contexts/hooks/useRadio";
import "./Sort.css";

export const Sort = () => {
    const {updateType} = useRadio();

    const handleSortChange = (e) => {
        const newSortType = e.target.value;
        updateType(newSortType);
    };

    return (
        <div>
            <select onChange={handleSortChange}>
                <option value="name">Name</option>
                <option value="votes">Votes</option>
            </select>
        </div>
    );
};
