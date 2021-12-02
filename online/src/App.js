import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
// import CreateElement from "./component/React.createElement로컴포넌트만들기";
// import FuncProps from "./component/Props&State";
// import ClassProps from "./component/Props&State";
// import ClassState from "./component/Props&State";
// import EventHandling from "./component/EventHandling";
// import ComponentLifecycle from "./component/ComponentLifecycle";
// import ComponentLifecycle16 from "./component/ComponentLifecycle16.3";
import Home from "./component/C3Router/Home";
import About from "./component/C3Router/About";
import NotFound from "./component/C3Router/NotFound";
function App() {
  const id = 30;
  return (
    <>
      <BrowserRouter>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        {/* id값을 특정변수로 넣기 */}
        <Link to={`/home/${id}`}>home2</Link>
        <Link to="/home/40">home3</Link>

        <Routes>
          <Route path="/home" element={<Home />} />
          {/* 동적 라우팅 */}
          <Route path="/home/:id" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
    // <div className="App">
    //   {/* <CreateElement /> */}
    //   {/* <FuncProps msg={"propsmsg"} /> */}
    //   {/* <ClassProps msg={"ClassProps"} /> */}
    //   {/* <ClassState /> */}
    //   {/* <EventHandling /> */}
    //   {/* <ComponentLifecycle name={"이름"} /> */}
    //   {/* <ComponentLifecycle16 /> */}
    // </div>
  );
}

export default App;
