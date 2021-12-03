1. App.module.css 추가
   기존의 App.css에 있는 코드 복붙
2. App.js에 작성

```jsx
import styles from "./App.module.css";
console.log(styles);
```

3. 콘솔 창 확인

```jsx
Object
{
  // 파일이름_클래스이름__해쉬값(겹칠 일 없는 값)으로 저장된다
  App: "App_App__16ZpL"
  App-header: "App_App-header__xLkWl"
  App-link: "App_App-link__3FsH9"
  App-logo: "App_App-logo__25k4o"
  App-logo-spin: "App_App-logo-spin__1e7sv"
}
[[Prototype]]: Object


```

module.css로 추가하면

1. 기존 클래스이름을 위와 같이 변환시킨다
   1. 해시값이 들어가기 때문에 오염되지 않는다
2. 클래스 이름을 갖고있는 요소에 변환된 값을 매칭시켜줄 수 있다.

styles이라는 이름으로 꺼내서 변수명으로 요소의 클래스이름으로 넣어서 사용할 수 있다 (아래)

```jsx
<div className={styles.App}></div>
// 아래 방법을 더 권장 - 클래스 이름에 언더바나 하이픈기호를 자주 사용하니까
<div className={styles['App']}></div>

//ex) 1. 삼항 연산자로 클래스이름 고르기
// isApp 변수값에 따라 아래와 같이 클래스이름을 다르게 바꿀 수 있음
<div className={isApp ? styles.App : styles["App-green"]}></div >

// ex) 2. 클래스 이름 두개 이상 추가
// 방법 1
 <div
      className={
        isApp ? styles.App + " " + styles["App-green"] : styles["App-green"]
      }
  ></div>
// 방법 2 (비효율적임)
 <div
      className={
        isApp ? `${styles.App} ${styles["App-green"]}` : styles["App-green"]
      }
    >
  </div>
  // 클래스 라이브러리 있음
  npm i classnames
```
