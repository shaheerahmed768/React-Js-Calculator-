import {useState} from 'react';

function App() {

  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ['/', '*', '+', '-', '.'];

  const updateCalc = value =>{
    if(
      ops.includes(value) && calc === "" ||
      ops.includes(value) && ops.includes(calc.slice(-1))
    ){
      return;
    }
    setCalc(calc + value);
  }

  const createDigits = () =>{
    const digits = [];

    for(let i=9; i>0; i--) {
      digits.push(
        <button 
        onClick={()=> updateCalc(i.toString())} 
        key={i}> {i} 
        </button>
      )
    }
    return digits;
  }

  const calculate =() => {
    setCalc(eval(calc).toString());
  }

  const del = () => {
    if (calc == '') {
      return;
    }

    const value = calc.slice(0, -1);
    setCalc(value);
  }

  const ac = () => {
    if (calc == '') {
      return;
    }

    const value = calc.slice(0, 0);
    setCalc(value);
  }

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span></span> : ''} 
          {calc || "0"}
        </div>
      
      <div className="operators">

        <button onClick={()=> updateCalc('/')}>/</button>
        <button onClick={()=> updateCalc('*')}>*</button>
        <button onClick={()=> updateCalc('+')}>+</button>
        <button onClick={()=> updateCalc('-')}>-</button>
        <button onClick={del}>C</button>
        <button onClick={ac}>AC</button>
      </div>

      <div className="digits">

        { createDigits() }
        <button onClick={()=> updateCalc('0')}>0</button>
        <button onClick={()=> updateCalc('.')}>.</button>
        <button onClick={calculate}>=</button>
      </div>
      </div>
    </div>
  );
}

export default App;
