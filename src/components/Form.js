import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./Form.css"
const Form = () => {
  const [validate,setValidate] =useState(false); 
  const [data,setData] = useState({});
  const [nombre,setNombre] = useState("");
  const [edad,setEdad] = useState("");
  const [barrio,setBarrio] = useState("");
  const [celular,setCelular] = useState("");
  const [email,setEmail] = useState("");
  const [genero,setGenero] = useState("");
  const [estadoCivil,setEstadoCivil] = useState("");
  const [nivelEducativo,setNivelEducativo] = useState("");
  const [ingresosMensuales,setIngresoMensuales] = useState("");

  const x =(e)=>{
      e.preventDefault()
    const data2 = {
        nombre: nombre,
        edad: edad,
        barrio: barrio,
        celular: celular,
        email:email,
        genero:genero,
        estadoCivil:estadoCivil,
        nivelEducativo:nivelEducativo,
        ingresosMensuales:ingresosMensuales
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
                <p className="card-text">Ingrese sus datos:</p>

                <form onSubmit={x}>

                    <div className='mb-3'>
                        <label className="form-label">Nombres Completos</label>
                        <input required value={nombre} onChange={e=>setNombre(e.target.value)} className="form-control"/>
                    </div>
                    <div className='mb-3'>
                        <label className="form-label">Edad</label>
                        <input required value={edad} onChange={e=>setEdad(e.target.value)} className="form-control" />
                    </div>
                    <div className='mb-3'>
                        <label className="form-label">Barrio o Sector</label>
                        <input required value={barrio} onChange={e=>setBarrio(e.target.value)} className="form-control" />
                    </div>
                    <div className='mb-3'>
                        <label className="form-label">Numero de celular</label>
                        <input required value={celular} onChange={e=>setCelular(e.target.value)}  className="form-control" />
                    </div>
                    <div className='mb-3'>
                        <label className="form-label">Correo Electronico</label>
                        <input required value={email} onChange={e=>setEmail(e.target.value)}  className="form-control" />
                    </div>
                    <div className='mb-3'>
                        <label className="form-label">Genero</label>
                        <select required value={genero} onChange={e=>setGenero(e.target.value)} className="form-select" >
                            <option value="">Seleccione...</option>
                            <option value="Hombre">Hombre</option>
                            <option value="Mujer">Mujer</option>
                        </select>
                    </div>
                    <div className='mb-3'>
                        <label className="form-label mb-2">Podrias indicarnos tu estado civil</label>
                        <select required value={estadoCivil} onChange={e=>setEstadoCivil(e.target.value)} className="form-select" >
                            <option value="">Seleccione...</option>
                            <option value="casado">Casado/a</option>
                            <option value="soltero">Soltero/a</option>
                            <option value="divorciado">Divorciado/a</option>
                        </select>
                    </div>
                    <div className='mb-3'>
                        <label className='mb-3'>¿Cuál es tu último nivel educativo cursado?</label>
                        <textarea required value={nivelEducativo} onChange={e=>setNivelEducativo(e.target.value)} className="form-control" placeholder="Escriba aqui..." ></textarea>
                                 
                    </div>
                    <div className='mb-3'>
                        <label className='mb-3'>¿Podrías indicarnos tus ingresos mensuales?</label>                        
                        <textarea required value={ingresosMensuales} onChange={e=>setIngresoMensuales(e.target.value)} className="form-control" placeholder="Escriba aqui..." ></textarea>
                    </div>

                    <button type="submit" disabled={((!nombre)||(!edad)||(!barrio)||(!celular)||(!email)||(!genero)||(!estadoCivil)||(!nivelEducativo)||(!ingresosMensuales))?true:false} onClick={x} className="btn btn-primary col-12" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
                            ¿Esta seguro que la información es correcta?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <Link to="/Pregunta1"
                                state={{sendData:data}}>
                                <button type="submit" data-bs-dismiss="modal"  className="btn btn-primary col-12">Enviar</button>
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
                    <input required value= {data.nombre} onChange={e=>setData({nombre:e.target.value })} placeholder="*Nombre" />
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

export default Form