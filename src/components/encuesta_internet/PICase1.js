import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import "./Preguntas.css";
const PICase1 = () => {
    const[validate,setValidate]=useState(false)
    const[validate2,setValidate2]=useState(false)


    const [provedorActualI,setProvedorActualI]=useState("");
    const [megasActualI,setMegasActualI]=useState("");
    const [dispExtraI,setDispExtraI]=useState("");
    const [sismetricoI,setSimetricoI]=useState("");
    const [rangoI,setRangoI]=useState("");
    const [mantenimientosI,setMantenimientosI]=useState("");


    const location = useLocation()
    const { sendData } = location.state
    const [pregunta1,setPregunta1] = useState("")
    const [data,setData] = useState({});
    console.log(sendData)
    const x = (e)=>{
        e.preventDefault()
        setValidate(true)
        const dataAux = {
            provedorActualI: provedorActualI,
            megasActualI:megasActualI,
            dispExtraI:dispExtraI,
            sismetricoI:sismetricoI,
            rangoI:rangoI,
            mantenimientosI:mantenimientosI,
            ...sendData
        }
        console.log(dataAux)
        setData(dataAux)   
    }
    const p = (e)=>{
        e.preventDefault()
        console.log(data)       
    }
  return (
    <div className='container'>        
        <div className="card col-xl-4 col-lg-5 col-md-6 col-sm-7 col-xs-12" >
            <div className='card-header'>
                <h5 className="card-title">KMB Encuesta</h5>    
            </div> 

            <div className="card-body">                
                <form onSubmit={x}>
                <div className='mb-3'>
                    <label className="form-label">¿Cuál es su proveedor de internet actual?</label>
                    <textarea required value={provedorActualI} onChange={e=>setProvedorActualI(e.target.value)} className="form-control" placeholder="Escriba aqui..." ></textarea>
                </div>
                <div className='mb-3'>
                    <label className="form-label">¿Cuántas megas de internet le ofrece su actual proveedor de internet?</label>
                    <textarea  required value={megasActualI} onChange={e=>setMegasActualI(e.target.value)} className="form-control" placeholder="Escriba aqui..." ></textarea>
                </div>    
                <div className='mb-3'>
                    <label className="form-label">¿Necesita algún dispositivo adicional para conectar internet entre varios dispositivos? (SI/NO)</label>
                    <textarea  required value={dispExtraI} onChange={e=>setDispExtraI(e.target.value)} className="form-control" placeholder="Escriba aqui..." ></textarea>
                </div> 
                <div className='mb-3'>
                    <label className="form-label">¿Sabe Ud. ¿Si su internet es asimétrico o simétrico?</label>
                    <textarea  required value={sismetricoI} onChange={e=>setSimetricoI(e.target.value)} className="form-control" placeholder="Escriba aqui..." ></textarea>
                </div> 
                <div className='mb-3'>
                    <label className="form-label">¿Sabe cuántos dispositivos puede conectar a través de su WIFI o router? SI/NO</label>
                    <textarea  required value={rangoI} onChange={e=>setRangoI(e.target.value)} className="form-control" placeholder="Escriba aqui..." ></textarea>
                </div> 
                <div className='mb-3'>
                    <label className="form-label">¿Tiene mantenimientos programados de parte de su proveedor de internet?</label>
                    <textarea   required value={mantenimientosI} onChange={e=>setMantenimientosI(e.target.value)} className="form-control" placeholder="Escriba aqui..." ></textarea>
                </div> 
                <button onClick={(e)=>x(e)} type="submit"  className="btn btn-primary col-12">                   
                        <Link  className={((!provedorActualI)||(!megasActualI)||(!dispExtraI)||(!sismetricoI)||(!rangoI)||(!mantenimientosI)||(!validate))?'disabled-link':""} to={"/PTv"}                        
                        state={{sendData:data}}
                        >              
                        Siguiente
                        </Link>
                </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default PICase1