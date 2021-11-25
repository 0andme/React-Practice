import "./App.css";
import C1_Sample from "./component/C1_Sample";
import C2_AddClassName from "./component/C2_AddClassName";
import C3_PropsData from "./component/C3_PropsData";
import C4_PropsDataString from "./component/C4_PropsDataString";
import C5_PropsDataTypes from "./component/C5_PropsDataTypes";
import C6_PropsDataBoolean from "./component/C6_PropsDataBoolean";
import C7_PropsShape from "./component/C7_PropsShape";
import C8_PropsShould from "./component/C8_PropsShould";
import C9_PropsDefault from "./component/C9_PropsDefault";
import C10_PropsNode from "./component/C10_PropsNode";
function App() {
  return (
    <div>
      <C1_Sample />
      <C2_AddClassName />
      <C3_PropsData name="부모로부터 받은 string" />
      <C4_PropsDataString name={"String데이터만 보내기"} />
      {/* <C4_PropsDataType name={false} /> */}
      <C5_PropsDataTypes
        boolValue={true}
        numValue={112}
        arrayValue={[1, 2, 3]}
        objValue={{ name: "강강강", age: 30 }}
        nodeValue={<h1>헤더</h1>}
        funcValue={console.log("하하하")}
      />
      <C6_PropsDataBoolean isTrue={false} />
      <C6_PropsDataBoolean isTrue={true} />
      <C7_PropsShape objValue={{ name: "Kim", age: 3 }} />
      <C8_PropsShould valueName="필수" />
      <C9_PropsDefault defaultData="data있음" />
      <C9_PropsDefault />
      <C10_PropsNode nodeData={<div>nodeData</div>} />
    </div>
  );
}
export default App;
