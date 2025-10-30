import { useState } from "react";
import "./counter.css"


export default function Counter() {
    const [counter, setCounter] = useState<number>(0);
    function onClick() {
        setCounter(counter + 1);
    }
    return(
        <div className="flexbox">
            <h1>Counter is: {counter}</h1>
            <button className='button' onClick ={onClick}>
                add one
            </button>
        </div>
    )
};