import React from "react";
import { Radio } from "../radio/Radio";
import { useRadio } from "../../contexts/hooks/useRadio";

export const RadioList = () => {
    const { data } = useRadio();

    return (
        <section>
            {data.map((radio, index) => (
                <Radio
                    key={index}
                    name={radio.name}
                    favicon={radio.favicon}
                    country={radio.country}
                    homepage={radio.homepage}
                    url={radio.url}
                />
            ))}
        </section>
    );
};
