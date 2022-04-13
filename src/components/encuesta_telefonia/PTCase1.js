import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import "./Preguntas.css";
const PTCase1 = () => {
    const[validate,setValidate]=useState(false)
    const[validate2,setValidate2]=useState(false)
    const [ptc,setPtc]=useState("");
    const [ptcdos,setPtcdos]=useState("");
    const location = useLocation()
    const { sendData } = location.state
    const [pregunta1,setPregunta1] = useState("")
    const [data,setData] = useState({});
    console.log(sendData)
    const x = (e)=>{
        e.preventDefault()
        setValidate(true)
        const dataAux = {
            ptc: ptc,
            ptcdos:ptcdos,
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
                    <label className="form-label">¿Conoces bien el plan que tienes para tu celular y lo que incluye?</label>
                    <textarea required value={ptc} onChange={e=>setPtc(e.target.value)} className="form-control" placeholder="Escriba aqui..." ></textarea>
                </div>
                <div className='mb-3'>
                    <label className="form-label">¿Cuánto gastas al mes en tu plan celular incluyendo llamadas y datos?</label>
                    <textarea  required value={ptcdos} onChange={e=>setPtcdos(e.target.value)} className="form-control" placeholder="Escriba aqui..." ></textarea>
                </div>    
                <button onClick={(e)=>x(e)} type="submit"  className="btn btn-primary col-12">                   
                        <Link  className={((!validate)||(!ptc)||(!ptcdos))?'disabled-link':""} to={"/PT3"}
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

export default PTCase1