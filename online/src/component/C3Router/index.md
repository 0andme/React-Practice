1. 전통적인 방식
   / 경로가 바뀌면 다시 서버에게 해당 html을 받으려고 한다

2. SPA 싱글페이지 어플리케이션 페이지
   서버로부터 한번에 덩어리를 받아오고 내부 에서, 브라우저에서 어떤 파일을 보여줄지 정한다

   1. SPA 라우팅 과정
      1. 브라우저에서 최초로 / 경로를 요청
      2. 서버에서 react web app을 내려준다
      3. 내려받은 react app에서 / 경로에 맞는 컴포넌트를 보여준다
      4. 다른 페이지로 이동하는 동작을 수행하면
      5. 새로운 경로에 맞는 컴포넌트를 보여준다

   이를 위해서는 react밖의 일 -> react Router Dom
   `npm i react-router-dom`

### 라우터 기본 사용법 (예시)

```jsx
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

<BrowserRouter>
  <Link to="/home">Home</Link>
  <Link to="/about">About</Link>
  <Routes>
    <Route path="/home" exact element={Home} />
    <Route path="/home:id" element={Home} />
    <Route path="/about" element={About} />
  </Routes>
</BrowserRouter>;
```
