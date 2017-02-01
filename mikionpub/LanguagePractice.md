# Language Practice Tracker


## 2017-01-10
### 공부하고 느낀점
* 현재 공부하고 있는 교재는 [모던 웹을 위한 Node.js 프로그래밍](http://www.hanb.co.kr/book/look.html?isbn=978-89-7914-888-6) 이다.
* 교재의 목표는 웹페이지를 구성하는 것임.
* 따라서 node.js의 문법보다는 이에 해당하는 모듈 위주의 설명과 예제를 직접 실행 해 봄으로써 문법은 자연스레 익숙해지도록 유도
* 연습문제가 없기 때문에 [알고스팟](https://algospot.com/judge/problem/list/) 을 통해 문법 연습이 필요
* 언어가 익숙해지고 나면 다음 단계로 넘어가고싶음
* 2017-01-11 기준 5과 이벤트 까지 읽음

## 2017-01-11
### 다음 주 숙제
* 문제풀이, 책 5과 까지
* 문법 검사
* 웹에 있는 Document Object Model 객체에 대해서 공부

### 공부하고 느낀 점
* 생활코딩 아저씨의 설명이 깔끔하고 듣기 편하다.
* 자바 스크립트 반복문까지 강의 들음
* 책 진도는 못나갔다.
* 문제는 10문제 정도 풀음
* 문제풀이도 좋지만 직접 목표를 가지고 개발을 해 보면 어떨까 생각했다.
* 근데 뭐부터 시작해야 좋을지 감이 잡히지 않음.
* 다음 주 목표는 책에서 웹서비스를 어떻게 구축하는지 정독 하고, 목표를 정하는 것
* 프레임웍이 뭘까?
* JS에서 하는 역할과 CSS 에서 하는 역할이 구체적으로 뭘까? 꼭 따로 개발해야 하는걸까?
* HTML 내에 JavaScript가 들어가는데, 왜 독단적으로 쓰지 못하는걸까?
  * 스크립트에다가 쓰는거랑 .js로 작성해서 인크루드 하는 방법.
* 그럼 HTML 문법은 자바스크립트 없이는 구현이 안되는걸까?
* 반응형 웹 : 미디어 쿼리

## Document Object Model (DOM)
* HTML, XML 문서의 프로그래밍 interface 이다. DOM은 문서의 구조화된 표현(structured representation)을 제공하며 프로그래밍 언어가 DOM 구조에 접근할 수 있는 방법을 제공하여 그들이 문서 구조, 스타일, 내용 등을 변경할 수 있게 돕는다. DOM 은 구조화된 nodes와 property 와 method 를 갖고 있는 objects로 문서를 표현한다. 이들은 웹 페이지를 스크립트 또는 프로그래밍 언어들에서 사용될 수 있게 연결시켜주는 역할을 담당한다.
* DOM 은 프로그래밍 언어는 아니지만 DOM이 없다면 자바스크립트 언어는 웹 페이지 또는 XML 페이지 및 요소들과 관련된 모델이나 개념들에 대한 정보를 갖지 못하게 된다.
* API (web or XML page) = DOM + JS (scripting language)
* 모든 웹 브라우저는 스크립트가 접근할 수 있는 웹 페이지를 만들기 위해 어느 정도의 DOM 을 항상 사용한다.
* 데이터 타입
  * document : document Type 의 Object를 리턴 할 때
  * element : DOM API 의 member 에 의해 return 된 element 또는 element type 의 node 를 의미
  * nodeList : nodeList 는 elements 의 배열
  * attribute : attribute 가 member 에 의해 리턴되는 것은, attribute 에 대한 특별한 인터페이스를 노출하는 object reference 이다. attributes 는 DOM 에서 elements 와 같은 nodes 이다. elements 만큼 많이 사용되지는 않는다.
  * namedNodeMap : array 와 유사하지만 items 은 name 또는 index 에 의해 접근 가능


## 2017-01-19
### 다음 주 숙제
* 자바스크립트 문법 공부 (생활코딩)
* 지뢰찾기
  * 남이 만든걸 보고 만들기
  * 실제로 인터페이스 정의 및 구현
* 문법 일주일 더 공부하기
* 간단한 것을 만들어보자 : 숫자 선택과 버튼이 있고, 선택한 숫자 구구단출력
  * document.getElement ... ... 어쩌고 저쩌고
  * Function 사용
  * 전역 변수 로직 금지

### 공부하고 느낀 점
* 하나도 못 했음

## 2017-01-25
### 2017-01-31
* 생활코딩 함수 공부
