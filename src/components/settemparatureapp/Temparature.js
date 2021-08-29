import React,{useState} from 'react';
import './Temparature.css';

const Temparature = () => {
    const [temparature, settemparature] = useState(10);
      const tempdisplay="cold";
      const hotdisplay="hot"
    return (
        <body>
     <div className="container">
        <div className="temparaturedisplaycontainer">
            <div className=  {`temp  ${ (temparature>15) ? hotdisplay:tempdisplay} `}> {temparature}*C </div>
        </div>

        <div className="buttonwraper">
            <button className="button1" onClick={()=>settemparature(temparature+1)} >+</button>
            <button  className="button2" onClick={()=>settemparature(temparature-1)} >-</button>
        </div>
     </div>
     </body>
    )
}

export default Temparature
