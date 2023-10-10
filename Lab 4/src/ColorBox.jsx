import React, { useState } from "react";

function ColorBox({ color }) {
  const [boxColor, setBoxColor] = useState(color);

  const changeColor = () => {
    const newColor = getRandomColor();
    setBoxColor(newColor);
  };

  const getRandomColor = () => {
    const hexChars = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hexChars[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div
      className="color-box"
      style={{ backgroundColor: boxColor,
               width: "50px",
               height: "50px" }}
      onClick={changeColor}
    ></div>
  );
}

export default ColorBox;