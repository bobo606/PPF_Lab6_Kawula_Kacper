import React from "react";
import './CFooter.css';


// function CFooter() {
//   let date = new Date();
//   return (
//     <div>
//       <h5>
//         PPFront-end, przykladowy serwis React. Dzisiaj mamy:{" "}
//         {date.toDateString()}{" "}
//       </h5>
//     </div>
//   );
// }


export const CFooter = (props) => {
    let date = new Date();
    return (
      <div>
        <h5>
          PPFront-end, przykladowy serwis React. Dzisiaj mamy: {date.toDateString()}
          <br/>
          Stan pogody: {props.weather}, temperatura: {props.temp}.
          <br/>
          {props.children}
        </h5>
      </div>
    );
  }
  

// export const CFooter = () => {
//   let date = new Date();
//   return React.createElement('div',{className: 'footerDivClass'},
//   React.createElement('h5', {id: 'footerText', className: 'footerTextClass'},
//   'PPFront-end, przykladowy serwis React. Dzisiaj mamy: ' +date.toDateString()));
// }

//export default CFooter;
 
