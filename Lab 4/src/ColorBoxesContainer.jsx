import React from "react";
import ColorBox from "./ColorBox";

function ColorBoxesContainer({ colors }) {
    const boxSize = "50px";

  return (
    <div className="color-boxes-container">
      
        
     {}
     {[...Array(5)].map((_, rowIndex) => (
        <div key={rowIndex} className="color-box-row">
          {[...Array(5)].map((_, colIndex) => {
            const index = rowIndex * 5 + colIndex;

           
            if (index < colors.length) {
              return <ColorBox key={index} color={colors[index]} />;
            } else {
              return <ColorBox key={index} color="#FF1493" />; 
            }
          })}
        </div>
      ))}
      
      
    </div>
  );
}

export default ColorBoxesContainer;