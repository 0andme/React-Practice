import React, { useEffect, useState } from "react";

function Example5() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Mount & update", count);
  });

  useEffect(() => {
    console.log("Mount", count);
  }, []);

  useEffect(() => {
    console.log("Mount & update by count", count);
  }, [count]);
  //
  useEffect(() => {
    console.log("Mount", count);
    return () => {};
  }, []);
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
export default Example5;
