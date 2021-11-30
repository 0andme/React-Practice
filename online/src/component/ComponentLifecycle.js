// ComponentLifecycle (16.3 이전)

import React, { Component } from "react";

class ComponentLifecycle extends Component {
  state = {
    age: 79,
  };
  interval = null;
  constructor(props) {
    super(props);
    console.log("constructor");
  }
  render() {
    // age값이 1초마다 변경될 때 render 함수가 호출되는 것을 확인 할 수 있다.
    console.log("render");
    return (
      <div>
        <h2>
          {this.props.name}-{this.state.age}
        </h2>
        <button
          onClick={() => {
            this.setState((state) => {
              return { ...state, age: state.age + 1 };
            });
          }}
        >
          클릭
        </button>
      </div>
    );
  }

  componentWillMount() {
    console.log("componentWillMount");
  }
  componentDidMount() {
    console.log("componentDidMount");
    // 주로 여기서 타이머나 api호출을 한다
    // 아래는 코드는 1초마다 실행
    this.interval = setInterval(() => {
      // console.log("timer");
      this.setState((state) => {
        return { ...state, age: state.age + 1 };
      });
    }, 1000);
  }
  // props를 새로 지정했을 때 바로 호출
  // state의 변경에는 반응하지 않는다
  // props 값에 따라 state를 변경해야한다면
  // 이 함수 내에서 setState를 이용하여 state를 변경한다
  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps", nextProps);
  }
  // props와 state 둘 중 하나만 변경되어도 호출
  // return 값에 따라 render 여부가 결정된다
  // 이 함수를 구현하지 않으면 디폴트는 true
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps, nextState);
    return true;
  }
  // 컴포넌트가 재 랜더링 되기 전에 호출
  // 여기선 setState 사용 X
  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate", nextProps, nextState);
  }
  // 렌더가 끝나면 불린다
  // 렌더 이전 값을 확인할 수 있다
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate", prevProps, prevState);
  }
  // 컴포넌트 언마운트
  // 컴포넌트가 사리지면 호출
  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

export default ComponentLifecycle;
