import React, { useState } from "react";

function Example3() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>click cnt : {count}</p>
      <button onClick={click}>UP</button>
    </div>
  );
  function click() {
    setCount(count + 1);
  }
}
export default Example3;
