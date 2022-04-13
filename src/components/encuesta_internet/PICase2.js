import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import "./Preguntas.css";
const PICase2 = () => {
    const[validate,setValidate]=useState(false)
    const[validate2,setValidate2]=useState(false)


    const [motivoNoI,setMotivoNoI]=useState("");
    const [interesadoI,setInteresadoI]=useState(-1);
    const [cuantasMegas,setCuantasMegas]=useState("");
    const [gustariaProvedor,setGustariaProvedor]=useState("");
    const [motivoNo,setMotivoNo]=useState("");


    const location = useLocation()
    const { sendData } = location.state
    const [pregunta1,setPregunta1] = useState("")
    const [data,setData] = useState({});
    console.log(sendData)
    const x = (e)=>{
        e.preventDefault()
        setValidate(true)
        const dataAux = {
            motivoNoI: motivoNoI,
            interesadoI:interesadoI,
            cuantasMegas:cuantasMegas,
            gustariaProvedor:gustariaProvedor,
            motivoNo:motivoNo,
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
                    <label className="form-label">¿Cuál es el motivo por el que no cuenta con internet en casa?</label>
                    <textarea required value={motivoNoI} onChange={e=>setMotivoNoI(e.target.value)} className="form-control" placeholder="Escriba aqui..." ></textarea>
                </div>
                <div className='mb-3'>
                    <label className="form-label">¿Está interesado en contratar un plan de internet?  </label>
                    <div className="form-check">
                    <input  onClick={()=>setInteresadoI(1)} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Si
                    </label>
                    </div>
                    <div className="form-check">
                    <input  onClick={()=>setInteresadoI(0)} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        No
                    </label>
                    </div>
                </div>  
                {interesadoI==1?
                <>
                <div className='mb-3'>                    
                    <label className="form-label">¿Cuántas megas le gustaría tener?</label>
                    <textarea  required value={cuantasMegas} onChange={e=>setCuantasMegas(e.target.value)} className="form-control" placeholder="Escriba aqui..." ></textarea>
                </div>
                <div className='mb-3'>
                <label className="form-label">¿Cuál le gustaría que fuera su proveedor de internet?</label>
                <textarea  required value={gustariaProvedor} onChange={e=>setGustariaProvedor(e.target.value)} className="form-control" placeholder="Escriba aqui..." ></textarea>
                </div> 
                
                </>
                :null}
                {interesadoI==0?<div className='mb-3'>
                <label className="form-label">¿Por qué motivo?</label>
                <textarea  required value={motivoNo} onChange={e=>setMotivoNo(e.target.value)} className="form-control" placeholder="Escriba aqui..." ></textarea>
                </div>:null}
                
                <button onClick={(e)=>x(e)} type="submit"  className="btn btn-primary col-12">                   
                        <Link  className={
                            (((!motivoNo)||(!motivoNoI)||(!validate))&&((!cuantasMegas)||(!gustariaProvedor)||(!validate)||(!motivoNoI)))?
                            'disabled-link':""} to={"/PTv"}
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

export default PICase2