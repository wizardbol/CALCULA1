import logo from './logo.svg';
import './App.css';
import React from 'react';
import Cabecera from './Cabecera/Cabecera';

function App(props) {
  const [edad,setEdad]=React.useState("")
  const [nombre,setNombre]=React.useState(props.nombre);
  var [valor2,setvalor2]=React.useState("");
  var [valor3,setvalor3]=React.useState("");
  var [oper,setoper]=React.useState("");
  let mensaje,valor1=0,oper0="",mensajeoper;
  const colocadigito = (edad,valor2,valor3,oper) => {
    setEdad(edad)
    setvalor2(valor2)
    setvalor3(valor3)
    setoper(oper)
    setNombre(nombre)} 

    switch (edad)
    {
       case "s":
          valor3=valor2;
          valor2=0;
          mensajeoper=<h1>{oper0}</h1>;
          mensaje=<h1>{valor2}</h1>;
          break;
        case "r":
            mensaje=<h1>r</h1>;
            break;
        case "m":
              mensaje=<h1>m</h1>;
              break;
        case "d":
          mensaje=<h1>d</h1>;
          break;
        case "1":
          valor1=valor2*10+1;
          valor2=valor1;
          mensaje=<h1>{valor1}</h1>;
          break;
        case "2":
          valor1=valor2*10+2;
          valor2=valor1;
          mensaje=<h1>{valor1}</h1>;
          break;
        case "3":
          valor1=valor2*10+3;
          valor2=valor1;
          mensaje=<h1>{valor1}</h1>;
          break;
        case "4":
          valor1=valor2*10+4;
          valor2=valor1;
          mensaje=<h1>{valor1}</h1>;
          break;
        case "5":
          valor1=valor2*10+5;
          valor2=valor1;
          mensaje=<h1>{valor1}</h1>;
          break;
        case "6":
          valor1=valor2*10+6;
          valor2=valor1;
          mensaje=<h1>{valor1}</h1>;
          break;
        case "7":
          valor1=valor2*10+7;
          valor2=valor1;
          mensaje=<h1>{valor1}</h1>;
          break;
        case "8":
          valor1=valor2*10+8;
          valor2=valor1;
          mensaje=<h1>{valor1}</h1>;
          break;
        case "9":
          valor1=valor2*10+9;
          valor2=valor1;
          mensaje=<h1>{valor1}</h1>;
          break;
        case "0":
          valor1=valor2*10;
          valor2=valor1;
          mensaje=<h1>{valor1}</h1>;
          break;
        case "C":
              valor1=0;
              valor2=0;
              valor3=0;
              mensaje=<h1>{valor2}</h1>;
              break;
        case "=":
          switch (oper0)
          {
             case "s":
                valor1=valor3+valor2;
                valor2=0;
                valor3=0;
                oper=<h1>{oper}</h1>;
                break;
              default:
                  mensaje=<h1>otro</h1>;
                  break;
          }
          break;
       default:
           mensaje=<h1>otro</h1>;
           break;
    }

  
  return (
    <div className="App">
      <Cabecera 
        nombre={nombre}
        valor2={valor2}
        oper0={oper0}
        edad={edad}
      />
      <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         
        <p>
          {mensajeoper}
          {valor3}
          {valor2}
          {mensaje} {nombre}
          {valor1}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Calculadora
        </a>
        <tr>
        <button type="button" id="botons" onClick={ () => colocadigito('s',valor2,valor3,oper) }>
          +
        </button>
        <button type="button" id="botonr" onClick={ () => colocadigito('r',valor2,valor3,oper) }>
          -
        </button>
        <button type="button" id="botonr" onClick={ () => colocadigito('m',valor2,valor3,oper) }>
          *
        </button>
        <button type="button" id="botonr" onClick={ () => colocadigito('d',valor2,valor3,oper) }>
          /
        </button>
        </tr>
        <tr>
        <button type="button" id="botons" onClick={ () => colocadigito('7',valor2,valor3,oper) }>
          7
        </button>
        <button type="button" id="botonr" onClick={ () => colocadigito('8',valor2,valor3,oper) }>
          8
        </button>
        <button type="button" id="botonr" onClick={ () => colocadigito('9',valor2,valor3,oper) }>
          9
        </button>
        </tr>
        <tr>
        <button type="button" id="botons" onClick={ () => colocadigito('4',valor2,valor3,oper) }>
          4
        </button>
        <button type="button" id="botonr" onClick={ () => colocadigito('5',valor2,valor3,oper) }>
          5
        </button>
        <button type="button" id="botonr" onClick={ () => colocadigito('6',valor2,valor3,oper) }>
          6
        </button>
        </tr>
        <tr>
        <button type="button" id="botons" onClick={ () => colocadigito('1',valor2,valor3,oper) }>
          1
        </button>
        <button type="button" id="botonr" onClick={ () => colocadigito('2',valor2,valor3,oper) }>
          2
        </button>
        <button type="button" id="botonr" onClick={ () => colocadigito('3',valor2,valor3,oper) }>
          3
        </button>
        </tr>
        <tr>
        <button type="button" id="botons" onClick={ () => colocadigito('0',valor2,valor3,oper) }>
          0
        </button>
        <button type="button" id="botonr" onClick={ () => colocadigito('C',valor2,valor3,oper) }>
          AC
        </button>
        <button type="button" id="botonr" onClick={ () => colocadigito('=',valor2,valor3,oper) }>
          =
        </button>
        </tr>
      </header>
    </div>
  );
}

export default App;

