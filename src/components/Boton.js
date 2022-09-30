import React from 'react'
import '../stylesheets/Boton.css';

function Boton(props){

    const esOperador=valor=>{
        return (isNaN(valor) && (valor !== '.') && (valor !== '='));  //Si todo cumple devuelve true
    };

    return(
            <div 
                className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
                onClick={() => props.manejarClick(props.children)}>
                {/*.trimEnd() elimina los espacios de un template string o cadena de caracteres al final y .trim() de inicio al final*/}
                {props.children}
            </div>
        );
    }

export default Boton; 