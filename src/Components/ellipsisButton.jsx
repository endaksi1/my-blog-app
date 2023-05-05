import React from "react";
import { HiEllipsisVertical } from "react-icons/hi2";

const EllipsisButton = (props) => {
    const ellipsis = <HiEllipsisVertical className="ellipsis"></HiEllipsisVertical>;
    return (
    <button {...props} className="ellipsis-button">

      {ellipsis && <HiEllipsisVertical type={ellipsis}/>}

      {props.children}

    </button>
 ); 
  
  
//   (
//     <HiEllipsisVertical className=" ellipsis-button" onClick={() => {
//         console.log("test thing");
//       }}>{props.children}</HiEllipsisVertical>
//   );
};

export default EllipsisButton;