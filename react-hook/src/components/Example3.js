import React, { useState } from "react";

function Example3() {
  const [state, setState] = useState({ count: 0 });
  return (
    <div>
      <p>click cnt : {state.count}</p>
      <button onClick={click}>UP</button>
    </div>
  );
  function click() {
    // setState((state)=>count + 1);
    setState((state) => {
      return { count: state.count + 1 };
    });
  }
}
export default Example3;
