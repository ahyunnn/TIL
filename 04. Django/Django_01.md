# Django



## <mark> 1. Django intro</mark>

#### 1-1. framework

* framework : 서비스 개발에 필요한 기능들을 미리 구현해서 모아놓은 것

* 누군가가 만들어 놓은 코드를 재사용하는 것은 이미 익숙한 개발 문화이고, 웹서비스 또한 누군가 개발해놓은 코드를 재사용하면 된다.

### 1-2. web

* 웹서비스는 클라이언트-서버 구조를 기반으로 동작함

* 요청(requests)가 있어야 응답(responses)가 있을 수 있음

* 클라이언트 : 서비스를 요청하는 주체

* 서버 : 요청에 대해 서비스를 응답하는 주체

* 웹브라우저 : 웹에서 페이지를 찾아서 보여주고, 하이퍼링크를 통해 다른 페이지로 이동할 수 있게 하는 프로그램

* 웹페이지 :웹에 있는 문서 (정적 웹페이지, 동적 웹페이지)



## <mark> 2. Django 구조</mark>

#### 2-1. MVC 디자인 패턴

* Model - View - Controller

* Model : 데이터와 관련된 로직을 관리

* View : 레이아웃과 화면을 처리

* Controller : model과 view를 연결하여 서비스를 직접적으로 구성해줌

#### 2-2. MTV 디자인 패턴

* Model - Template - View

* Model : 데이터와 관련된 로직을 정리

* Template : 화면상의 나타나는 인터페이스 구조와 레이아웃을 정의

* View : 클라이언트의 요청에 대해 처리



### <mark> 3. Django Template</mark>

* DTL() Django Template Language) : 조건, 반복, 변수 치환, 필터 등의 기능을 제공

* 변수 : `{{ variable }}`

* 필터 : `{{ variable|filter }}`

* 태그 : `{% tag %}`

* 주석 : `{# #}` / `{% comment %} {% endcomment %}`



### <mark> 4. Django Inheritance</mark>

* 템플릿 상속은 기본적으로 코드의 재사용성에 초점

* 템플릿 상속에 관련된 태그 : `{% extends ''%}`



# 
