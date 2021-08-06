import React, { useState } from "react";
import Heading from "./Heading";
import Display from "./Display";
// import { BsBackspace } from "react-icons/bs";

function Calculator() {

    const charArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/", "%", ".",];
    const [output, setOutput] = useState("");

    document.addEventListener("keydown", (event) => {
        const value = event.key;
        console.log(value);

        if (charArray.indexOf(value) !== -1) {
            setOutput(output.concat(value));
        } else if (value === "C" || value === "c") {
            handleClear();
        } else if (value === "=" || value === "Enter") {
            calculateOutput();
        } else if (value === "Backspace" || value === "delete") {
            handleBackspace();
        } else {
            console.log("Error");

        }
    });


    function handleClick(event) {
        const value = event.target.name;
        setOutput(output.concat(value));
    }


    function calculateOutput() {
        try {
            console.log(eval(output).toExponential());
            setOutput(eval(output).toString());
        } catch {
            setOutput("Error");
        }
    }


    function handleClear() {
        setOutput("")
    }


    function handleBackspace() {
        setOutput(output.slice(0, output.length - 1))
    }


    return <div className="calculator">
        <Heading />
        <Display result={output} />

        <div className="buttonPanel">
            <button onClick={handleClear} >C</button>
            <button onClick={handleBackspace}> CE </button>
            <button name="%" onClick={handleClick} >%</button>
            <button name="+" onClick={handleClick} >+</button>
            <button name="7" onClick={handleClick} >7</button>
            <button name="8" onClick={handleClick} >8</button>
            <button name="9" onClick={handleClick} >9</button>
            <button name="-" onClick={handleClick}  >-</button>
            <button name="4" onClick={handleClick} >4</button>
            <button name="5" onClick={handleClick} >5</button>
            <button name="6" onClick={handleClick} >6</button>
            <button name="*" onClick={handleClick}  >x</button>
            <button name="1" onClick={handleClick} >1</button>
            <button name="2" onClick={handleClick} >2</button>
            <button name="3" onClick={handleClick} >3</button>
            <button name="/" onClick={handleClick} >/</button>
            <button name="0" onClick={handleClick} className="zeroBtn">0</button>
            <button name="." onClick={handleClick}  >.</button>
            <button onClick={calculateOutput} >=</button>
        </div>
    </div>
}

export default Calculator;
