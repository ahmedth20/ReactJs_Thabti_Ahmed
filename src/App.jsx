import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import CounterC from './CounterC'
import CounterF from './CounterF'
// import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [name] = useState('');
  const [lastName] = useState('');
const handleClick =()=>{setCount(()=>count+1)}
  return (
    <>
     <Header name={name} lastName={lastName} />
     <button onClick={handleClick}>{count}</button>
     <CounterC counter={count}/>

     <h1>Counter F</h1>
     <CounterF/>
    
     <Footer />
       </>
  )
}

export default App
