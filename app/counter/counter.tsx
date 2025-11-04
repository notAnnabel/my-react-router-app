import { useEffect, useState } from "react";
import "./counter.css"
import { getCounter, postCounter } from "helpers/requests";


export default function Counter() {
    const [counter, setCounter] = useState<number>(0);

    useEffect(() => {
        async function fetchData() {
            const data = await getCounter();
            setCounter(data);
        }

        fetchData();
    }, []) // there are no dependencies

    function onClick() {
        postCounter(counter + 1);
        setCounter(counter + 1);
    }
    return (
        <div className="flexbox">
            <h1>Counter is: {counter}</h1>
            <button className='button' onClick={onClick}>
                add one
            </button>
        </div>
    )
};