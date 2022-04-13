import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Respuesta from './components/Respuesta';
import * as bootstrap from 'bootstrap';
import Preguntas from './components/encuesta_telefonia/Preguntas';
import PTCase1 from './components/encuesta_telefonia/PTCase1';
import PTCase2 from './components/encuesta_telefonia/PTCase2';
import PT3 from './components/encuesta_telefonia/PT3';
import PreguntasI from './components/encuesta_internet/PreguntasI';
import PICase1 from './components/encuesta_internet/PICase1';
import PICase2 from './components/encuesta_internet/PICase2';
import PreguntasTv from './components/encuesta_tv/PreguntasTv';
import Final from './components/Final';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>    
        <Route path='/Pregunta1' element={<Preguntas/>}/> 
        <Route path='/PTCase1' element={<PTCase1/>}/>
        <Route path='/PTCase2' element={<PTCase2/>}/>
        <Route path='/PT3' element={<PT3/>}/>
        <Route path='/PreguntaI1' element={<PreguntasI/>}/>
        <Route path='/PICase1' element={<PICase1/>}/>                      
        <Route path='/PICase2' element={<PICase2/>}/> 
        <Route path='/PTv' element={<PreguntasTv/>}/> 
        <Route path='/Final' element={<Final/>}/> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
