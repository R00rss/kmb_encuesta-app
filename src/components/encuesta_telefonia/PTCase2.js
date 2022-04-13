import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import "./Preguntas.css";
const PTCase2 = () => {
    const[validate,setValidate]=useState(false)
    const[validate2,setValidate2]=useState(false)
    const [PTCase2_1,setPTCase2_1]=useState("");
    const [PTCase2_2,setPTCase2_2]=useState("");
    const location = useLocation()
    const { sendData } = location.state
    const [pregunta1,setPregunta1] = useState("")
    const [data,setData] = useState({});
    console.log(sendData)
    const x = (e)=>{
        e.preventDefault()
        setValidate(true)
        const dataAux = {
            PTCase2_1: PTCase2_1,
            PTCase2_2:PTCase2_2,
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
                    <label className="form-label">¿Sabes cuántos minutos utilizas al mes?</label>
                    <textarea required value={PTCase2_1} onChange={e=>setPTCase2_1(e.target.value)} className="form-control" placeholder="Escriba aqui..." ></textarea>
                </div>
                <div className='mb-3'>
                    <label className="form-label">¿Sabes cuántos datos utilizas al mes?</label>
                    <textarea  required value={PTCase2_2} onChange={e=>setPTCase2_2(e.target.value)} className="form-control" placeholder="Escriba aqui..." ></textarea>
                </div>    
                <button onClick={(e)=>x(e)} type="submit"  className="btn btn-primary col-12">                   
                        <Link  className={((!validate)||(!PTCase2_1)||(!PTCase2_2))?'disabled-link':""} to={"/PT3"}
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

export default PTCase2