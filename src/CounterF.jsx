<<<<<<< HEAD
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
=======
import { useEffect, useState } from 'react'
const CounterF = ({step}) =>{
    console.log("CounterF : Render");
    const [count,setCount]=useState(0);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setLoading(false);
        },3000);
        return ()=>clearTimeout(timer);
    },[])

    useEffect(()=>{
        console.log("Component Did update");
    },[count])
    const handleClick = () =>{
        setCount((prev)=>prev+step);
    }
    const handleClickDec = () =>{
        setCount((prev)=>prev-step);
    }
    const handleReset = () =>{
        setCount(0);
    }
    return (
       <>
       {loading ? <h1>Loading ....</h1> : 
        <>
        <p>Count ={ count}</p>
        <button onClick={handleClick}>Incrementer de {step}</button>
        <button onClick={handleClickDec}>Decrementer de {step}</button>
        <button onClick={handleReset}>Reset</button>
        </>}
         </>
    );
};
export default CounterF;
>>>>>>> d658a0f (Atelier-State)
