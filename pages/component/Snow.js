import React from "react";

export default function Snow(props) {
    var numb = 199;
    var arr = [];
    for (let i = 0; i < numb; i++) {
        arr.push({name: "snow", key: numb - i});
    }

    return (
        <>
        {arr.map(e => (
            <div key={e.key} className={e.name}></div>
        ))}
        </>
    )
}