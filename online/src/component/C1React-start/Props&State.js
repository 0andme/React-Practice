// props
// 컴포넌트 외부에서 내부로 전달하는 데이터

// state
//  컴포넌트 내부에서 변경할 수 있는 데이터
// 두 값 모두 변경이 되면 렌더가 다시 일어날 수 있다.

// 렌더함수
// 컴포넌트를 그리는 방법을 기술하는 함수가 렌더함수이다

// 1. function에서의 props
// import React from "react";
// function FuncProps(props) {
//   return <div>{props.msg}</div>;
// }

// export default FuncProps;
// 2. class에서의 props
// import React, { Component } from "react";

// class ClassProps extends Component {
//   render() {
//     return <div>{this.props.msg}</div>;
//   }
// }

// export default ClassProps;

// 1. class에서의 state 정의 및 변경
import React, { Component } from "react";

class ClassState extends Component {
  // state 정의 방법 - 1
  // state = {
  //   counter: 0,
  // };

  // state 정의 방법 - 2
  constructor(props) {
    super(props);
    //
    this.state = { counter: 0 };
  }

  render() {
    // state 사용
    return <div>{this.state.counter}</div>;
  }

  componentDidMount() {
    setTimeout(() => {
      // state 변경 -1
      // ()안에 객체 넣기
      // this.setState({
      //   counter: this.state.counter + 1,
      // });
      // state 변경 - 2
      // () 괄호 안에 화살표 함수 넣기
      this.setState((previous) => {
        const newState = { counter: previous.counter + 1 };
        return newState;
      });
    }, 1000);
  }
}

export default ClassState;
