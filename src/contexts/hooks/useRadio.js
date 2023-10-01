import { useContext } from "react";
import { RadioContext } from "../Radio.context";

export const useRadio = () => {
    return useContext(RadioContext);
};
