import logo from "./logo.svg";
import "./App.css";
import CreateElement from "./component/React.createElement로컴포넌트만들기";
// import FuncProps from "./component/Props&State";
// import ClassProps from "./component/Props&State";
import ClassState from "./component/Props&State";
function App() {
  return (
    <div className="App">
      <CreateElement />
      {/* <FuncProps msg={"propsmsg"} /> */}
      {/* <ClassProps msg={"ClassProps"} /> */}
      <ClassState />
    </div>
  );
}

export default App;
