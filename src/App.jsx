
import { useState } from "react";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Counter from "./components/counter/Counter";



function App(){
  

  let [count,setCount] = useState(0) ;
  
  const changeCounter = () => {
    setCount(count+1)
    setCount(count+1)
    console.log(count)
  }
return (
  
  <>


  <button onClick={changeCounter}>Mohamad Ghnemat{count}</button>
 

 </>
);
}

export default App ;