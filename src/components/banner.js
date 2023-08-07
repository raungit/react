import React from "react";

function Banner() {
  function handleClick() {
    alert("I am a component");
  }

  return (
    <div class="banner">
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default Banner;
