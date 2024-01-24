import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const[text,setText] = useState('');
  
  // variation 1 every render
  // useEffect( ()=>{
  //   console.log("UI has been rendered");
  // })

  // variation 2 - only one time render
  // useEffect(()=>{
  //   console.log("UI has been rendered");
  // }, []);


  // variation 3 - only one time render
  useEffect(()=>{
    console.log("text value changed");
  }, [text]);


    function changeHandler(event){
      console.log(text);
      setText(event.target.value);
    }

  return (
    <div className="App">
      <input type="text" onChange={changeHandler}></input>
    </div>
  );
}

export default App;
