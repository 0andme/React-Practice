### Redirect

페이지 이동시 다른 주소로 연결해 강제 이동 시키는 것을 말한다

6버전 이후부터 Redirect키워드 대신 `Navigate` 키워드를 사용한다

```jsx
<Route path="/freetime" render={() => <Redirect to="/free/freetime" />} />
```

위의 render도 삭제되었기 때문에 아래와 같이 사용한다

```jsx
<Route path="/freetime" element={<Navigate replace to="/free/freetime" />} />
```

```jsx
// 사용예시
// isHome의 값에 따라 link가 결정됨
<Route path="/home" element={isHome ? <Navigate to="/about" /> : <Home />} />
```
