import React, { useState } from 'react'



//Estilos de la calculadora

const styles = {
  margin: '40px 400px ',
  width: '200px',
  height: '300px',
  border: 'none',
  background: 'rgb(188, 188, 229)',
};

const boton ={
  border: 'none',
  background: 'rgb(121, 121, 238)',
  color: 'whitesmoke',
  width: '30px',
  margin: '10px 5px'
}

const divS ={
  margin: '10px 5px', 
  
}

const res ={
  
  font: '60px',
  background: 'rgb(16, 151, 16)',
  border: 'none',
  color: 'white',
  margin: '5px',
  width: '30px',
}

const pantalla ={
  margin: '20px 10px',
  border: 'none',
  width: '160px',
  height: '60px',
}



function Calculator() {
  const [resultados, setResultados] = useState("");


  function handleClick(e){
    setResultados(resultados.concat(e.target.name));
  }

  function limpiar(){
    setResultados("")
  }

  function calcular(){
    try{
      setResultados((resultados).toString());
    }catch(error){
      setResultados("Error");
    }

    
  }

  return(
    <div className="container" style={styles} >
    <form>
      <input className="input" type="text" value={resultados} style={pantalla}/>
    </form>
    <div className="buttons" style={divS}>
      
        <button name="1" onClick={handleClick} style={boton}>1</button>
        <button name="2" onClick={handleClick} style={boton}>2</button>
        <button name="3" onClick={handleClick} style={boton}>3</button>
        <button name="+" onClick={handleClick} style={boton}>+</button>
        <br />
        <button name="4" onClick={handleClick} style={boton}>4</button>
        <button name="5" onClick={handleClick} style={boton}>5</button>
        <button name="6" onClick={handleClick} style={boton}>6</button>
        <button name="-" onClick={handleClick} style={boton}>-</button>
        <br />
        <button name="7" onClick={handleClick}style={boton}>7</button>
        <button name="8" onClick={handleClick}style={boton}>8</button>
        <button name="9" onClick={handleClick}style={boton}>9</button>
        <button name="*" onClick={handleClick}style={boton}>*</button>
        <br />
        <button name="0" onClick={handleClick}style={boton}>0</button>
        <button name="/" onClick={handleClick}style={boton}>/</button>
        <button onClick={limpiar} style={boton}>C</button>
        <button id="resultados" onClick={calcular} style={res}>=</button>
      </div>
  </div>

  );
}
export default Calculator;
