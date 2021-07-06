import "./App.css";
import { useState, useEffect } from "react";



function App({authorized}) {
  const [emotion, setEmotion] = useState("HAPPY");
  const [secondary, setSecondary] = useState("tired");
  useEffect(() => {
  console.log(`its ${emotion} around here!`);
  }, [emotion]);


  useEffect(() => {
    console.log(`its ${secondary} around here!`);
    },[secondary]);

return(
  <>
<h1>Current emtion is {emotion} and {secondary}</h1>  
<button onClick={()=> setEmotion("Happy")}>Happy</button>
<button onClick={()=> setSecondary("crabby")}>make crabby</button>
<button onClick={()=> setEmotion("frustrated")}>frustrated</button>
<button onClick={()=> setEmotion("enthusiastic")}>enthusiastic</button>
</>
)
  
}


export default App;
