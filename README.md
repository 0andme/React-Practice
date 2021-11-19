# React-Practice-

React 연습-실습

1. 211118

### 리액트의 핵심 모듈

1. import reactDom from 'react-dom'
   1. html 요소에 연결할때 사용된다
2. import react from 'react'
   1. 리액트 컴포넌트를 만들때 사용된다.
3.

###

1. js,jsx문법으로 코드 작성
2. cdn을 통한 리액트 라이브러리 사용

###

1. Hook이란 뭘까

2. 컴포넌트 만드는 법

Function 컴포넌트명(){
return (
jsx문법
);

}

    Const 컴포넌트명 = ()=> ()

React.CreateElement(
type, // 태그 이름 문자열 | 리액트 컴포넌트 | React.Fragment
[props], // 리액트 컴포넌트에 넣어주는 데이터 객체
[...children] // 자식으로 넣어주는 요소들
)

1. 태그 이름 문자열
   ```
   ReactDom.render(
    React.createElement(('h1',null,'태그 내용'))
   )
   ```
