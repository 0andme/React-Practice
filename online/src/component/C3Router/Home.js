import React from "react";
// import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useParams } from "react-router-dom";

function Home(props) {
  let prams = useParams();
  console.log(prams.id, typeof prams.id);

  return (
    <div>
      <span>Home</span>
      {prams.id && <p>{prams.id}</p>}
    </div>
  );
}

export default Home;
