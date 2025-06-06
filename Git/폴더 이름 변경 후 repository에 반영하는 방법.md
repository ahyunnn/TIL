#### 🐣Intro
* 프로젝트에서 폴더를 만들다가 실수로 대문자가 들어간 폴더를 만들었는데 convention은 소문자로 시작하는 `camelCase` 폴더였다. 그래서 local에서 수정하고 push를 했는데 폴더명이 바뀌지 않은 상태로 올라가서 pull 받은 다른 분들 local에서 에러가 터졌다.
* 다시는 이런 실수를 하지 않기 위해 다짐하며 올리는 Git 폴더 이름 바꾸기!

#### 💡`git mv oldName newName`
* 해답은 `git mv oldName newName` 명령어를 사용해서 이름을 바꿔주기
* `mv` 명령어는 소문자/대문자를 구분하지 못하기 때문에 임시 이름을 넣어줬다가 바꿔줘야한다!
```js
// 만약 Login 폴더를 login으로 바꾸고 싶다면

git mv Login test // 1차적으로는 test로 이름을 바꿔주고
git mv test login // 그 다음에 login으로 바꾸기
```