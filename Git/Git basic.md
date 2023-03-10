# Git

* 분산 버전 관리 프로그램
* 중복 내용 없이 변경된 기록(commit)만 따로 관리가 가능함
* github : 기준이므로 synk를 깃허브에 맞춰야함 -> TIL용(SSAFY언급X)
* 깃은 프로그램, 깃허브는 서비스 이름

# GITHUB 사용이유

* 개발자로써 얼마나 프로그램에 열정과 흥미가 있는지 확인할 수 있음(잔디왕)
* 하루도 빠짐없이 올리자!!!! 잔디왕이 되자!!
* 유튜브 개발새발 

# CLI

* 명령어를 통해서 컴퓨터와 상호작용하는 방식
* 수 많은 서버, 개발시스템이 사용하고 있음
* 명령어 (touch : 파일생성하는 명령어, mkdir : 새 폴더를 생성하는 명령어, ls : 현재 작업 중인 디렉토리의 폴더/파일 목록을 보여주는 명령어, cd : 현재 작업 중인 디렉토리를 변경하는 명령어 , start, open : 폴더/파일을 여는 명령어(windiws에서는 open), rm, rm -rf : 파일을 삭제하는 명령어, -rf옵션을 주면 폴더 완전 삭제 가능) => ~~정리~~
* 절대경로 : 부트 디렉토리로부터 목적 지점까지 거치는 모든 경로를 전부 작성한 것 (어느 누가 보더라도 해당 경로로 갈 수 있음)
* 상대경로 : 현재 작업하고 있는 디렉토리를 기준으로 계산된 상대적 위치를 작성한 것
* 절대경로, 상대경로는 시작점을 보면 된다.
* ./ : 현재 작업하고 있는 폴더
* ../ : 현재 작업하고 있는 폴더의 부모 폴더

# markdown

* markdown cheat sheet 사이트 참고
* README.md 파일을 통해 오픈소스의 공식문서 작성 (README는 무조건 대문자)
* 개인 프로젝트의 소개문서 작성
* 매일 학습한 내용 정리
* 마크다운을 이용한 블로그 운영
* 대부분의 웹 에디터에서 지원
* 헤딩, 리스트, 코드블럭, 링크, 이미지, 텍스트강조, 수평선

# GIT 기본기

* repository
  
  * 버전을 관리하는 저장소
  * local repository(개인pc), remote repository(원격저장소-github/lab) 두 개가 존재
  * git init 명령어로 로컬 저장소를 생성(해당 폴더를 깃으로 관리하겠다는 뜻)
  * .git 디렉토리에 버전관리에 필요한 모든 것이 들어있음

* git의 세가지 영역
  
  * working directory : 내가 작업하고 있는 실제 디렉토리 (untracked)
    -> git add , git status ->
  * staging area : 커밋(commit)으로 남기고 싶은 특정 버전으로 관리하고 싶은 파일이 있는 곳 -> 깃으로 관리되어도 되는지/할 것인지 확인하는 장소 
     -> git commit, git log ->
  * repository : 커밋(commit)들이 저장되는 곳
  * 과정 : pull - add - commit - push

# local

* git status : 현재 나의 깃 파일의 현재 상태를 알 수 있는 명령어(text msg 잘확인하기)
* git add : untracked -> staged  msg차이를 잘 확인하기
* git commit : vim이 실행됨
* git commit -m "msg": msg를 같이 등록하겠다는 옵션
* 처음 깃을 사용하는 경우 : 메일과 이름 등록이 필요함(msg를 참고하세요)
* git config --global user.name "user_name"
* git config --global user.email "user_email" (잔디가 심기지 않는다면 이메일오타)
* git log : git의 커밋 히스토리 보기
* git diff : 두 commit간 차이 보기
* status : 깃의 현 상태 확인 / log : 커밋의 히스토리 보기

# remote

* git remote -v : 리모트 주소 확인하는 방법
* git remote add origin {remote_repo} *origin : repo_name 별명
* git push origin master *master : local branch

# push

* 로컬에 github repo를 연결
* git clone {remote_repo} : remote repo를 로컬로 복사
* git push origin master : 로컷의 최신 커밋을 리모트로 푸쉬함

![git리모트등록과정](./img/git%20%EB%A6%AC%EB%AA%A8%ED%8A%B8%20%EB%93%B1%EB%A1%9D%EA%B3%BC%EC%A0%95.PNG)
![git리모트수정과정](./img/git%20%EB%A6%AC%EB%AA%A8%ED%8A%B8%20%EC%88%98%EC%A0%95%EA%B3%BC%EC%A0%95.PNG)
