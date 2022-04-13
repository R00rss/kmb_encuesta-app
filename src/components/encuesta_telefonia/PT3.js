import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import "./Preguntas.css"
const PT3 = () => {
    const[validate,setValidate]=useState(false)
    const location = useLocation()
    const { sendData } = location.state||{}
    const [data,setData] = useState({});
    const [operadoraActual,setOperadoraActual] =useState("")
    const [servicioActual,setServicioActual] =useState("")
    const [mejorariaOperadora,setMejorariaOperadora] =useState("")
    const [recomiendeOperadora,setRecomiendeOperadora] =useState("")

    console.log(sendData)

    const x =(e)=>{
        e.preventDefault()
      const data2 = {
        operadoraActual: operadoraActual,
        servicioActual: servicioActual,
        mejorariaOperadora: mejorariaOperadora,
        recomiendeOperadora: recomiendeOperadora,
        ...sendData
      }
        console.log(data2)
        setData(data2)
    }
  return (
    <div className='container'>        
        <div className="card col-xl-4 col-lg-5 col-md-6 col-sm-7 col-xs-12" >
            <div className='card-header'>
                <h5 className="card-title">KMB Encuesta</h5>    
            </div> 

            <div className="card-body">
                <h5 className="card-title">¡Nos importa tu opinión!</h5>
                <form onSubmit={x}>

                <div className='mb-3'>
                        <label className="form-label">¿Qué operadora de telefonía actualmente tiene?</label>
                        <input required value={operadoraActual} onChange={e=>setOperadoraActual(e.target.value)} className="form-control"/>
                    </div>
                    <div className='mb-3'>
                        <label className="form-label">¿Qué tan satisfecho estás con el servicio que te brinda tu compañía de telefonía?</label>
                        <input required value={servicioActual} onChange={e=>setServicioActual(e.target.value)} className="form-control" />
                    </div>
                    <div className='mb-3'>
                        <label className="form-label">¿Qué mejoraría de su operadora telefónica? </label>
                        <select required value={mejorariaOperadora} onChange={e=>setMejorariaOperadora(e.target.value)} className="form-select" >
                            <option value="">Seleccione...</option>
                            <option value="servicios_cliente">Servicio al cliente</option>
                            <option value="tarifa_servicios">Tarifa de los servicios</option>
                            <option value="velocidad_navegacion">Velocidad de navegación</option>
                            <option value="variedad_planes">Variedad en planes pre pago y post pago</option>
                        </select>
                    </div>
                    <div className='mb-3'>
                        <label className="form-label">¿Qué tan probable es que Ud. recomiende su operador móvil? (Seleccione una opción)</label>
                        <select required value={recomiendeOperadora} onChange={e=>setRecomiendeOperadora(e.target.value)} className="form-select" >
                            <option value="">Seleccione...</option>
                            <option value="muy_probable">Muy probable</option>
                            <option value="probable">Probable</option>
                            <option value="poco_probable">Poco probable</option>
                            <option value="nada_probable">Nada probable</option>
                        </select>
                    </div>
                    

                    <button type="submit" disabled={((!recomiendeOperadora)||(!mejorariaOperadora)||(!servicioActual)||(!operadoraActual))?true:false} onClick={x} className="btn btn-primary col-12" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Siguiente
                    </button>

                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Aviso</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ¡Encuesta finalizada! ¿Desea guardar los cambios?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <Link to="/PreguntaI1"
                                state={{sendData:data}}>
                                <button type="submit" data-bs-dismiss="modal"  className="btn btn-primary col-12">Guardar</button>
                            </Link>
                        </div>
                        </div>
                    </div>
                    </div>
                    
                </form>
            </div>
        </div>
        {/* <form>
            <div className='mb-3'>
                    <label>Nombre:</label>
                    <input value= {data.nombre} onChange={e=>setData({nombre:e.target.value })} placeholder="*Nombre" />
                    <p>{data.nombre}</p>
                    <Link to="/respuesta"
                        state={{sendData:data}}
                    >
                    <button onClick={test} disabled={validate?false:true}></button>);
                    </Link>  
            </div>

        </form> */}
    </div>
  )
}

export default PT3