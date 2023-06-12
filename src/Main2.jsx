// import React, { useState,useEffect} from "react";
// const Main2 = () => {
//   const [inputValue, setInputValue] = useState("");
//   const [result, setResult] = useState("");

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

  //use with eval function
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     try {
//       const calculatedResult = eval(inputValue);
//       setResult(calculatedResult);
//     } catch (error) {
//       setResult("Error");
//     }
//   };
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     try {
//       const calculatedResult = calculateExpression(inputValue);
//       setResult(calculatedResult);
//     } catch (error) {
//       setResult("Error");
//     }
//   };
//   const calculateExpression = (expression) => {
//     const operators = {
//       "+": (a, b) => a + b,
//       "-": (a, b) => a - b,
//       "*": (a, b) => a * b,
//       "/": (a, b) => a / b,
//     };

//     const values = expression.split(/([-+*/])/);
//     let result = parseFloat(values[0]);

//     for (let i = 1; i < values.length; i += 2) {
//       const operator = values[i];
//       const operand = parseFloat(values[i + 1]);

//       if (!operators[operator] || isNaN(operand)) {
//         throw new Error("Invalid expression");
//       }

//       result = operators[operator](result, operand);
//     }

//     return result;
//   };
//   const handleClear=()=>{
//     setInputValue("");
//     setResult("");
//   }
//   useEffect(() => {
//     const storedInputValue = localStorage.getItem("calculatorInputValue");
//     if (storedInputValue) {
//       setInputValue(storedInputValue);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("calculatorInputValue", inputValue);
//   }, [inputValue]);

//   return (
//     <div className="calculator-container">
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={inputValue}
//           onChange={handleInputChange}
//           placeholder="Enter an expression"
//         />
//         <button type="submit">Calculate</button>
//         <button type="button" onClick={handleClear}>Clear</button>
//       </form>
//       <p className="result">Result: {result}</p>
//     </div>
//   );
// };

// export default Main2;


