import './App.css';
import React,{useState} from 'react'
import Wether from './components/Wether';

function App() {
  const [data, setdata] = useState("");
   const outputtemparature=(tempdata)=>{
    setdata(tempdata);
   }


  return (

    <div className="App">
       <Wether tepmhandler={outputtemparature} />
       <h1>temparature is {data} </h1>
    </div>
  );
}

export default App;
