import React, { useEffect, useState } from "react";
import { RadioContext } from "../contexts/Radio.context";

export const RadioProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [name, setName] = useState([]);
    const [type, setType] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `http://91.132.145.114/json/stations/byname/${name}?limit=15&order=${type}`
                );
                const json = await response.json();
                setData(json);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [name, type]);

    return (
        <RadioContext.Provider
            value={{
                data,
                updateName: setName,
                updateType: setType,
            }}
        >
            {children}
        </RadioContext.Provider>
    );
};
