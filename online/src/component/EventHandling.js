// Event Handling
// 카멜 케이스로 작성한다
// on + 이벤트명={자바스크립트함수}

import React, { Component } from "react";

class EventHandling extends Component {
  state = {
    cnt: 0,
  };
  // constructor(props) {
  //   super(props);
  //   // 1. click 메소드가 this를 알아듣는 방법- 아래 코드 추가
  //   this.click = this.click.bind(this);
  // }
  render() {
    return (
      <div>
        <p> cnt : {this.state.cnt}</p>
        {/* 1. 클릭 이벤트 메소드를 바로 작성 */}
        {/* <button
          onClick={() => {
            this.setState((state) => {
              return { ...state, cnt: state.cnt + 1 };
            });
          }}
        >
          클릭
        </button> */}
        {/* 2. 클릭 이벤트로 메소드를 연결 */}
        <button onClick={this.click}>click</button>
      </div>
    );
  }
  // 클릭이벤트에 사용되는 함수를 바깥에서 정의
  // click() {
  //   this.setState((state) => {
  //     return { ...state, cnt: state.cnt + 1 };
  //   });
  // }
  // 2. click 메소드가 this를 알아듣는 방법 - 메소드를 화살표 함수로 작성
  click = () => {
    this.setState((state) => {
      return { ...state, cnt: state.cnt + 1 };
    });
  };
}

export default EventHandling;
