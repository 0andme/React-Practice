import logo from "./logo.svg";
// import "./App.css";
import styles from "./App.module.css";
import {
  BrowserRouter,
  NavLink,
  Link,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";
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
  const isHome = true;
  const isApp = true;
  return (
    <div
      className={
        isApp ? `${styles.App} ${styles["App-green"]}` : styles["App-green"]
      }
    >
      <BrowserRouter>
        {/* <Link to="/home">Home</Link> */}
        <NavLink
          to="/home"
          style={({ isActive }) => ({ color: isActive ? "green" : "red" })}
          className={({ isActive }) => (isActive ? "actived" : "")}
        >
          home
        </NavLink>
        {/* <Link to="/about">About</Link> */}
        <NavLink
          to="/about"
          style={({ isActive }) => ({ color: isActive ? "green" : "red" })}
          className={({ isActive }) => (isActive ? "actived" : "")}
        >
          about
        </NavLink>
        {/* id값을 특정변수로 넣기 */}
        {/* <Link to={`/home/${id}`}>home2</Link> */}
        <NavLink
          to={`/home/${id}`}
          style={({ isActive }) => ({ color: isActive ? "green" : "red" })}
          className={({ isActive }) => (isActive ? "actived" : "")}
        >
          home30
        </NavLink>
        {/* <Link to="/home/40">home3</Link> */}
        <NavLink
          to="/home/40"
          style={({ isActive }) => ({ color: isActive ? "green" : "red" })}
          className={({ isActive }) => (isActive ? "actived" : "")}
        >
          home40
        </NavLink>

        <Routes>
          <Route
            path="/home"
            element={isHome ? <Navigate to="/about" /> : <Home />}
          />
          {/* 동적 라우팅 */}
          <Route path="/home/:id" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
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
