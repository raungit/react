import React from "react";

function Banner() {
  const handleClick = () => {
    alert("I am a component");
  };

  return (
    <div className="banner">
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default Banner;
