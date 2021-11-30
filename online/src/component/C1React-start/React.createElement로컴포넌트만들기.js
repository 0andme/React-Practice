/* 
React.CreateElement(
  type, // 태그 이름 (문자열) | 리액트 컴포넌트 | React.Fragment
  [props], // 리액트 컴포넌트에 넣어주는 데이터 객체
  [...children] // 자식으로 넣어주는 요소들
);
*/

// 1. 태그 이름 (문자열) 생성
// import React, { Component } from "react";

// class CreateElement extends Component {
//   render() {
//     // 태그 이름 , 데이터 값, 자식데이터
//     const newData = React.createElement("h1", null, "h1입니다");
//     return newData;
//   }
// }
// export default CreateElement;

// 2. 리액트 컴포넌트 생성
// import React, { Component } from "react";
// // 기존의 컴포넌트를
// const compo = () => {
//   return React.createElement("p", null, "리액트 컴포넌트");
// };

// class CreateElement extends Component {
//   render() {
//     // 생성할떄 불러온다
//     const data = React.createElement(compo, null, null);
//     return data;
//   }
// }
// export default CreateElement;

// 3. React.Fragment
// 태그 없이도 요소를 render할 수 있다.
import React, { Component } from "react";

class CreateElement extends Component {
  render() {
    const data = React.createElement(React.Fragment, null, "Fragment");
    return data;
  }
}

export default CreateElement;

// 4. 복잡한 요소 render
// React.createElement안에 React.createElement를 또다시 호출해야한다.
// 굉장히 불편해짐
// const data = React.createElement(React.Fragment, null, React.createElement());
