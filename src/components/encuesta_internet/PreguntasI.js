import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import "./Preguntas.css"
const PreguntasI = () => {
    const[validate,setValidate]=useState(false)
    const location = useLocation()
    const { sendData } = location.state
    const [preguntaI1,setPreguntaI1] = useState(false)
    const [data,setData] = useState({});
    console.log(sendData)

    const x = ()=>{
        setValidate(true)
        const dataAux = {
            preguntaI1: preguntaI1,...sendData
        }
        console.log(dataAux)
        setData(dataAux)        
    }
  return (
    <div className='container'>        
        <div className="card col-xl-4 col-lg-5 col-md-6 col-sm-7 col-xs-12" >
            <div className='card-header'>
                <h5 className="card-title">KMB Encuesta</h5>    
            </div> 

            <div className="card-body">
                <h5 className="card-title">¡Nos importa tu opinión!</h5>
                <form>
                
                <div className='mb-3'>
                    <label className="form-label">¿Cuenta usted con internet en casa? </label>
                    <div className="form-check">
                    <input  onClick={x} onChange={()=>setPreguntaI1(true)} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Si
                    </label>
                    </div>
                    <div className="form-check">
                    <input onClick={x} onChange={()=>setPreguntaI1(false)} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        No
                    </label>
                    </div>
                </div>
                    <Link className={!validate?'disabled-link':""} to={preguntaI1?"/PICase1":"/PICase2"}
                        state={{sendData:data}}
                    >
                        <button disabled={validate?false:true} type="submit"  className="btn btn-primary col-12">Enviar</button>                    
                    </Link> 
                </form>
            </div>
        </div>
    </div>
  )
}

export default PreguntasI