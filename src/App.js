import './App.css';
import Boton from './components/Boton';
import Pantalla from './components/Pantalla';
import imagen from './img/freeCodeCamp-logo.png';
import BotonClear from './components/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import Logo from './components/Logo';

function App() {

  const [input, setInput]=useState('');

  const agregarInput=(valor)=>{
    if(isNaN(valor) && isNaN(input.charAt(input.length - 1))){
      setInput(input);
    }else{
      setInput(input+valor);
    }
  };

  const calcularResultado=()=>{
    if(input){
      setInput(evaluate(input));
    }else{
      alert('Por favor ingrese valores para realizar los calculos');
    }
  };

  return (
    <div className="App">
      <Logo
        classDiv='freecodecamp-logo-contenedor'
        imagen={imagen}
        classImg='freecodecamp-logo'
        alt='Logo de freCodeCamp'
      />
      <div className='contenedor-calculadora'>
          <Pantalla 
            input={input}
          />
          <div className='fila'>
            <Boton manejarClick={agregarInput}>1</Boton>
            <Boton manejarClick={agregarInput}>2</Boton>
            <Boton manejarClick={agregarInput}>3</Boton>
            <Boton manejarClick={agregarInput}>+</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick={agregarInput}>4</Boton>
            <Boton manejarClick={agregarInput}>5</Boton>
            <Boton manejarClick={agregarInput}>6</Boton>
            <Boton manejarClick={agregarInput}>-</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick={agregarInput}>7</Boton>
            <Boton manejarClick={agregarInput}>8</Boton>
            <Boton manejarClick={agregarInput}>9</Boton>
            <Boton manejarClick={agregarInput}>*</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick={calcularResultado}>=</Boton>
            <Boton manejarClick={agregarInput}>0</Boton>
            <Boton manejarClick={agregarInput}>.</Boton>
            <Boton manejarClick={agregarInput}>/</Boton>
          </div>
          <div className='fila'>
            <BotonClear manejarClick={()=>setInput('')}>Limpiar</BotonClear>
          </div>
      </div>
    </div>
  );
}

export default App;
