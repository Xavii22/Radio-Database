import React from "react";
import "./Radio.css";

export const Radio = (props) => {
    return (
        <article>
            <div className="info-content">
                <h2>{props.name}</h2>
                <span>{props.country}</span>
                <a href={props.homepage}>Home page</a>
            </div>
            <div className="other-content">
                <audio controls>
                    <source src={props.url}></source>
                </audio>
            </div>
            <div className="other-content">
                <img src={props.favicon} alt="Radio icon"></img>
            </div>
        </article>
    );
};
