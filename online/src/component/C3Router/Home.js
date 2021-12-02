import React from "react";
// import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

function Home(props) {
  let prams = useParams();
  console.log(prams.id, typeof prams.id);
  const his = useNavigate();
  function gotoAbout() {
    his("/about");
  }
  return (
    <div>
      <span>Home</span>
      <button onClick={gotoAbout}>About으로 가는 버튼</button>
      {prams.id && <p>{prams.id}</p>}
    </div>
  );
}

export default Home;
