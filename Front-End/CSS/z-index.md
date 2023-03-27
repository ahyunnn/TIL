### ✅ `z-index`란?

- 위치 지정 요소와 그 자손 또는 하위 플렉스 아이템의 z축 순서를 지정함

- 더 큰 z-index 값을 가진 요소가 작은 값의 요소 위를 덮습니다.
  
  ![Untitled](C:\Users\elly1\Downloads\Untitled%20(2).png)
  
  - 숫자가 클수록 위로 온다!

- 위치 지정 요소( `position`이 `static` 외의 다른 값인 요소)의 박스에 대해, z-index 속성은 다음 항목을 지정함
  
  1. 현재 쌓임 맥락에서 자신의 위치
  2. 자신만의 쌓임 맥락 생성 여부\

### z-index 구문

```css
/* 키워드 값 */
z-index: auto;

/* <integer> 값 */
z-index: 0;
z-index: 3;
z-index: 289;
z-index: -1; /* 음수 값으로 우선순위를 낮출 수 있음 */

/* 전역 값 */
z-index: inherit;
z-index: initial;
z-index: unset;
```

### 프로젝트 대입

<img src="file:///C:/Users/elly1/Downloads/Untitled.png" title="" alt="Untitled" width="292">

- navbar가 제일 앞으로 와야하는데 카카오 맵 뒤에 배치되어있다.
  
  - 그래서 navbar styled-components에 `z-index: 999;`를 넣어주고
  - 카카오 맵에 `z-index: -1`을 넣어주었더니
  
  <img src="file:///C:/Users/elly1/Downloads/Untitled%20(1).png" title="" alt="Untitled" width="269">

- 카카오맵이 뒤로 간 것을 확인할 수 있다!

### position속성과 z-index의 연관성

- position 속성이 없는 태그 ⇒ 순서대로 쌓인다.
- position 속성이 있는 태그들 ⇒ 없는 태그들보다 위에, 나오는 순서대로 쌓인다.
- position 속성과 z-index값이 있으면 ⇒ z-index값이 큰 태그가 위에 쌓인다.
- z-index값이 커도 ⇒ 부모 태그의 z-index가 우선된다
