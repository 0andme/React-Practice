<!-- 시작점 -->

1. index.js

```jsx
ReactDOM.render(
  <React.StrictMode>
    <App />,
  </React.StrictMode>,
  // 위의 jsx 문법이 root요소에 그려진다
  // root요소는 public/index.html에 있음
  document.getElementById("root")
);
```

2. App.js

버전이 올라가면서 `import React from "react";`가 없어도 ok

3. chrom 확장 프로그램 react developer tools

다운 후 확장 프로그램 실행 -> 개발자 도구의 컴포넌트 창이 생김
프로파일러는 렌더시간등 성능 지표로 삼을 수 있음
