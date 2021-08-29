import React,{useState} from 'react'

const Wether = (props) => {
    const [data, setdata] = useState("");
    const [temp, settemp] = useState("");
  
    const submithandler=(e)=>{
         e.preventDefault();
         fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=d885aa1d783fd13a55050afeef620fcb`)
          .then(res=>res.json())
          .then(result=> {
            const kelvin=result.main.temp;
            const celsius=kelvin-273.15
            settemp( Math.round(celsius) +"C");
             }).catch(()=>alert("city not found"))
    }

    return (
        <div>
            <form onSubmit={submithandler}>
                <input type="text" value={data} onChange={(e)=>setdata(e.target.value)} />
          <br/>  <button>get temparature</button>
            </form>
            <h1>temparature { temp}</h1> 
            
        </div>
    )
}

export default Wether

