// import React from "react";
//

// const Main=()=> {
//     return (
//       <div className='Container'>
//        <Input/>
//         </div>
//     );
//   }
//   export default Main;
import React, { useState,useEffect } from "react";
import Button from "./Button";
import Display from "./Input";
// Calculator Component
const Main = () => {
  const [displayValue, setDisplayValue] = useState("");

  const appendToDisplay = (value) => {
    setDisplayValue((prevValue) => prevValue + value);
  };

  const clearDisplay = () => {
    setDisplayValue("");
  };
 
  const deleteLastItem = () => {
    setDisplayValue((prevValue) => prevValue.slice(0, -1));
  }; // Load the value from local storage when the component mounts
  useEffect(() => {
    const storedValue = localStorage.getItem("displayValue");
    if (storedValue) {
      setDisplayValue(storedValue);
    }
  }, []);

  // Update the local storage whenever the displayValue changes
  useEffect(() => {
    localStorage.setItem("displayValue", displayValue);
  }, [displayValue]);
  const calculateExpression = (expression) => {
    const operators = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
      "*": (a, b) => a * b,
      "/": (a, b) => a / b,
      "%": (a, b) => a % b,
    };
    const values = expression.split(/([-+*/%])/);
    let result = parseFloat(values[0]);

    for (let i = 1; i < values.length; i += 2) {
      const operator = values[i];
      const operand = parseFloat(values[i + 1]);

      if (!operators[operator] || isNaN(operand)) {
        throw new Error("Invalid expression");
      }

      result = operators[operator](result, operand);
    }
    return result;
  };
  const calculate = () => {
    try {
      const result = calculateExpression(displayValue);
      setDisplayValue(result.toString());
    } catch (error) {
      setDisplayValue("Error");
    }
  };

  return (
    <body className="container">
      <div id="calculator">
        <Display value={displayValue} />
        <div id="buttons">
          <Button onClick={clearDisplay} value="AC" />
          <Button onClick={deleteLastItem} value="DE" />
          <Button onClick={() => appendToDisplay("%")} value="%" />
          <Button onClick={() => appendToDisplay("/")} value="/" />
          <Button onClick={() => appendToDisplay("7")} value="7" />
          <Button onClick={() => appendToDisplay("8")} value="8" />
          <Button onClick={() => appendToDisplay("9")} value="9" />
          <Button onClick={() => appendToDisplay("*")} value="*" />
          <Button onClick={() => appendToDisplay("4")} value="4" />
          <Button onClick={() => appendToDisplay("5")} value="5" />
          <Button onClick={() => appendToDisplay("6")} value="6" />
          <Button onClick={() => appendToDisplay("-")} value="-" />
          <Button onClick={() => appendToDisplay("1")} value="1" />
          <Button onClick={() => appendToDisplay("2")} value="2" />
          <Button onClick={() => appendToDisplay("3")} value="3" />
          <Button onClick={() => appendToDisplay("+")} value="+" />
          <Button onClick={() => appendToDisplay("0")} value="0" />
          <Button onClick={() => appendToDisplay(".")} value="." />
          <Button onClick={calculate} value="=" id="equal-button" />
        </div>
      </div>
    </body>
  );
};

export default Main;
