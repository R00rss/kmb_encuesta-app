import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
const PreguntasTv = () => {
    const[validate,setValidate]=useState(false)

    const [contratadoTv,setContratadoTv]=useState(-1);
    const [horasTvDia,setHorasTvDia]=useState("");
    const [horarioTv,setHorarioTv]=useState("");


    const location = useLocation()
    const { sendData } = location.state
    const [data,setData] = useState({});
    console.log(sendData)
    const x = (e)=>{
        e.preventDefault()
        setValidate(true)
        const dataAux = {
            horasTvDia: horasTvDia,
            contratadoTv: contratadoTv,
            horarioTv: horarioTv,
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
                    <label className="form-label">¿Tiene contratado el servicio de internet con una compañía de televisión por cable?</label>
                    <div className="form-check">
                    <input  onClick={()=>setContratadoTv(1)} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Si
                    </label>
                    </div>
                    <div className="form-check">
                    <input  onClick={()=>setContratadoTv(0)} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        No
                    </label>
                    </div>
                </div> 
                <div className='mb-3'>
                        <label className="form-label mb-2">¿Cuántas horas de televisión ve al día?</label>
                        <select required value={horasTvDia} onChange={e=>setHorasTvDia(e.target.value)} className="form-select" >
                            <option value="">Seleccione...</option>
                            <option value="<2>">Menos de 2 horas</option>
                            <option value="2-5">Entre 2 a 5 horas</option>
                            <option value="5-7">De 5 a 7 horas</option>
                            <option value="<7">Más de 7 horas</option>
                            <option value="no_mira_tv">No veo televisión</option>
                        </select>
                </div>
                <div className='mb-3'>
                        <label className="form-label mb-2">¿En qué horario del día ves frecuentemente la televisión?</label>
                        <select required value={horarioTv} onChange={e=>setHorarioTv(e.target.value)} className="form-select" >
                            <option value="">Seleccione...</option>
                            <option value="12am-5am">Madrugada (12am - 5am)</option>
                            <option value="5am-12pm">Mañana (5am - 12 pm)</option>
                            <option value="12pm-4pm">Mediodía (12pm - 4pm)</option>
                            <option value="4pm-8p">Tarde (4pm - 8pm)</option>
                            <option value="8pm-12am">Noche (8pm - 12am)</option>
                            <option value="no_mira_tv">Ninguna</option>
                        </select>
                </div>
                
                
                
                <button onClick={(e)=>x(e)} type="submit"  className="btn btn-primary col-12">                   
                        <Link  className={((!validate)||(!horarioTv)||(!horasTvDia)||((contratadoTv!=1)&&(contratadoTv!=0)))?'disabled-link':""} to={"/Final"}
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

export default PreguntasTv