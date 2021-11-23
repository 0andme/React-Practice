import "./App.css";
import C1_Sample from "./component/C1_Sample";
import C2_AddClassName from "./component/C2_AddClassName";
import C3_PropsData from "./component/C3_PropsData";
import C4_PropsDataType from "./component/C4_PropsDataType";
import C5_PropsDataTypes from "./component/C5_PropsDataTypes";
function App() {
  return (
    <div>
      <C1_Sample />
      <C2_AddClassName />
      <C3_PropsData name="부모로부터 받은 string" />
      <C4_PropsDataType name={"String데이터만 보내기"} />
      {/* <C4_PropsDataType name={false} /> */}
      <C5_PropsDataTypes
        boolValue={true}
        numValue={112}
        arrayValue={[1, 2, 3]}
        objValue={{ name: "강강강", age: 30 }}
        nodeValue={<h1>헤더</h1>}
        funcValue={console.log("하하하")}
      />
    </div>
  );
}
export default App;
