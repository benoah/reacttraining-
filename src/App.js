import "./App.css";
import { useState,  } from "react";



function App() {
 const [checked, setChecked] = useState(false);

 function toogle(){
  setChecked((checked) => !checked)
 }

return(
  <>
  <input type="checkbox"
   value={checked}
    onChange={toogle} 
    />
    <p>{checked ? "checked" : "not checked"}</p>
</>
)
  
}


export default App;
