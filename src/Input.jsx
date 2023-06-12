// import React from "react";
// import Button from "./Button";
// const Input = () => {
//   return (
//     <div>
//       <div>
//         <input type="text" placeholder="Calculate"/>
//       </div>
//       <div className="row1">
//         <Button number={"AC"} />
//         <Button number={"DE"} />
//         <Button number={"%"} />
//         <Button number={"/"} />
//       </div>
//       <div className="row2">
//         <Button number={7} />
//         <Button number={8} />
//         <Button number={9} />
//         <Button number={"*"} />
//       </div>
//       <div className="row3">
//         <Button number={4} />
//         <Button number={5} />
//         <Button number={6} />
//         <Button number={"-"} />
//       </div>
//       <div className="row4">
//         <Button number={1} />
//         <Button number={2} />
//         <Button number={3} />
//         <Button number={"+"} />
//       </div>
//       <div className="row5">
//         <Button number={0} />
//         <Button number={"."} />
//         <Button number={"="} />
//       </div>
//     </div>
//   );
// };
// export default Input;
import React from "react";
// Display Component
const Display = ({ value }) => {
  return <input type="text" value={value} readOnly />;
};
export default Display