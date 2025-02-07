import { useEffect, useState } from "react";

const CounterF = () => {
    console.log("CounterF:render");
    const [count, setCount] = useState(0);

    const handleIncrement = () => setCount(prevCount => prevCount + 10);
    const handleDecrement = () => setCount(prevCount => prevCount - 10);
    const handleReset = () => setCount(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log("Component Did Mount");
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        console.log("Component Up");
    }, [count]);

    return (
        <>  
            <p>Count = {count}</p>
            <button onClick={handleIncrement}> +10</button>    
            <br /><br />
            <button onClick={handleDecrement}> -10</button>
            <br /><br />
            <button onClick={handleReset}>reset</button>
        </>
    );
}

export default CounterF;
