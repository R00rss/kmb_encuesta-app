import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import "./Final.css"
const Final = () => {
    const location = useLocation()
    const { sendData } = location.state
    console.log(sendData)
    const exportData = () => {
        const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
          JSON.stringify(sendData)
        )}`;
        const link = document.createElement("a");
        link.href = jsonString;
        link.download = "data.json";
    
        link.click();
      };
  return (
    <div className='container'>        
        <div className="card col-xl-4 col-lg-5 col-md-6 col-sm-7 col-xs-12 final" >
            <div className='card-header'>
                <h5 className="card-title">KMB Encuesta</h5>    
            </div> 

            <div className="card-body">
                <h5 className="card-title">¡Gracias por participar!</h5>
                <button className='btn btn-primary col-12' type="button" onClick={exportData}>
                    Export Data
                </button>
            </div>
        </div>
    </div>
  )
}

export default Final