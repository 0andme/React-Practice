// ComponentLifecycle16.3
import React, { Component } from "react";

class ComponentLifecycle16 extends Component {
  render() {
    console.log("render");
    if (this.state.hasErr) {
      return <div>{"ERR"}</div>;
    }
    return <DataERR />;
  }
  // 1.  constructor
  // constructor(props) {
  //   super(props);
  //   console.log(constructor);
  //   this.state = {
  //     age: 36,
  //     hasErr: false,
  //   };
  // }

  // 2.getDerivedStateFromProps
  // componentWillMount에서 아래로 변경
  // render실행되기 무조건 불린다고 생각하자
  // 특수 경우에만 (props에 따라 state를 변경해야할때)
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log("getDerivedStateFromProps", nextProps, prevState);
  //   // return에 state가 변경될 수 있고
  //   // 아래처럼 state가 변경되도 이 함수가 호출된다
  //   return { age: 45 };
  // }

  // componentWillReceiveProps에서 아래로 변경
  // getDerivedStateFromProps() {}

  // 그대로 componentDidMount() {}
  // 그대로 shouldComponentUpdate() {}

  // 3.getSnapshotBeforeUpdate
  // dom에 적용되기 직전
  // componentWillUpdate에서 아래로 변경
  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   // 원하는 시점의 데이터를 리턴값으로 보낼수 있다
  //   // 그 값은 componentDidUpdate에서 인자로 들어온다
  //   return null;
  // }

  // 그대로 componentDidUpdate(prevProps, prevState,snapshot) {}
  // 그대로componentWillUnmount() {}

  // 4.componentDidCatch
  // 컴포넌트 에러 캐치
  // 자기 자신이 문제가 있을 떄는 모름
  // componentDidCatch(error, info) {
  //   this.setState((state) => {
  //     return { ...state, hasErr: true };
  //   });
  // }
}

export default ComponentLifecycle16;
