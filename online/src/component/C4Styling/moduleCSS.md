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

```

코드를 보면 굉장히 지저분한 것을 알 수 있다. 이를 편리하게 도와주는 라이브러리 가 있다.

#### classnames 라이브러리

```jsx
// 1. 라이브러리 설치
 npm i classnames
//  2. import
import classNames from "classnames";
// true인 값들만 콘솔에 찍히는 것을 아래 코드로 확인 할 수 있다
console.log(
    classNames(null, false, "bar", undefined, 0, 1, { barNull: null }, "")
  ); // bar 1

```

이를 사용해서 기존의 코드를 아래와 같이 수정 할 수 있다

```jsx
<div
  className={
    isApp ? classNames(styles.App, styles["App-green"]) : styles["App-green"]
  }
></div>
```

하지만 코드 길이가 달라졌다거나 더 간편해진 느낌은 아니다.

```jsx

<div className={classNames(styles.App, { styles["App-green"])}}></div>
```

삼항 연산자를 사용하지 않으려면 아래처럼 쓰고 싶을 것이다
기본적으로 App 클래스를 가지고 있고 변수 값에 따라 App-green 클래스를 넣을지 말지.

```jsx
// 아래 코드는 에러가 발생
  <div className={
    classNames(
      styles.App,
      {styles["App-green"]:isApp}
      )}></div>
// 아래 코드는 styles의 App-green이 아닌
// App-green 자체가 클래스 이름으로 들어감
  <div className={
    classNames(
      styles.App,
      {"App-green":isApp}
      )}></div>
// 위와 같은 느낌으로 써야하는데 객체의 키 부분에
// styles["App-green"] 이 데이터를 넣을 순 없다.
// 이러한 문제를 classNames에서 제공하는 기능(bind)으로 해결할 수 있다
```

#### classNames/bind

```jsx
// 1. import /bind 붙여서
import classNames from "classnames/bind";
// 2. styles bind
import styles from "./App.module.css";
const cx = classNames.bind(styles);
// 3. 사용
<div className={cx("App", { "App-green": isApp })}></div>;
```

위와 같이 쓰면 App과 App-green이 module.css의 각 클래스와 매칭이 되게 된다
`class="App App-green"`이 아닌 `class="App_App_해시값 App_App-green_해시값" `
즉, `class="파일이름_클래스이름__해쉬값"`형태로 들어가있음을 알 수 있다
