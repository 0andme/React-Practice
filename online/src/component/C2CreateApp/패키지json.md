필수 핵심 라이브러리
"react": "^17.0.2",
"react-dom": "^17.0.2",

createApp 라이브러리라고 생각하면 된다
createApp 버전과 동일하다
"react-scripts": "4.0.3",

테스팅을 도와주는 라이브러리
"@testing-library/jest-dom": "^5.15.1",
"@testing-library/react": "^11.2.7",
"@testing-library/user-event": "^12.8.3",

구글에서 사이트 경험을 측정하고 개선할 수 있도록 정보를 얻어내는 라이브러리
"web-vitals": "^1.1.2"

명렁어들

```jsx
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
}
```

1.start : 개발 모드로 로컬에서 서버를 띄울 수 있음
2.build : 프로덕션으로 배포 / 최종 배포 명령어 /파일들을 작게 만들어줌 /

만들어진 build폴더를 실행시키는 법 /
-s 옵션은 어떤 라우팅으로 요청해도 index.html을 응답하도록 한다. 싱글페이지 어플리케이션의 약자이다

```jsx
npm install -g serve
serve -s build
```

혹은

```jsx
npx serve -s build
```

3.test
`npm test`
jest를 이용

`__tests__`폴더 안의 .js파일
.test.js 로 끝나는 파일
.spec.js로 끝나는 파일들이 테스트에 사용된다

4.eject
`npm run eject`
createApp에서 이 프로젝트를 꺼내겠다는 의미. 커스텀하고 싶을 때가 있으니까. 현업에서 잘 하지 않는다. 관리가 어려워서. 실행하면 새로운 폴더들이 생긴다 ex.confilg파일

웹팩
파일이 어떤 처리 과정을 거칠 것인지 = 어떤 loader를 사용할 것인지 웹팩에 설정되어있다.
