// import React from "react";
// function Button({number}){
//     return(
//         <div className="circleBtn">
//             <button>{number}</button>
//         </div>
//     )
// }
// export default Button
// Button Component
import React from "react";
const Button = ({ onClick, value }) => {
    return <button onClick={onClick}>{value}</button>;
  };
  export default Button