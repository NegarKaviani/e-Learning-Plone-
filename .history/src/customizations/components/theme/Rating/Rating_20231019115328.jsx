import React from "react";


export default function Rating (props){
    return(
        <div className="progress flex items-center gap-1.5">
            {Array.apply(null, { length: props.progress }).map((e, i) => (
                <div className="h-3 w-3 bg-yellow-300 rounded-full" key={i}></div>
                ))}
            {Array.apply(null, { length: (5 - props.progress) }).map((e, j) => (
            <div className="h-3 w-3 bg-zinc-300 rounded-full" key={j}></div>
            ))}
        </div>
    )
    
}

