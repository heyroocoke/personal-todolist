# 2023.01.01

## 목표
- [x] 대략적인 틀과 자리배치 html과 css로 작성
- [x] 중앙 > 생성버튼 클릭이벤트로 생성기능 구현 (todo.js)
- [x] 중앙 > 상단 시간 꾸미기


## 진행
- html구조 및 전체적인 틀 작성
- new Date()를 이용하여 중앙상단에 현재시간 구현 ( setTimeout이용 1초마다 갱신 )
- 중앙 input-box 구현 

---

# 2023.01.02

## 목표
- [x] input에서 투두를 작성하고 엔터를 입력하면, 밑에 생성
- [x] input에서 투두를 작성하고 옆에 생성버튼을 클릭하면, 밑에 생성
- [x] 삭제버튼 클릭시 todoId로 찾아서 선택된 todo만 삭제기능 구현

## 진행
- 중앙 input-box에 todo입력 후 엔터 입력 시 or 생성버튼 클릭 시, 밑에 생성 및 추가 구현

## 진행하면서 알게된 내용
- form태그 내부에 input박스가 한 개일 경우 엔터를 누르면 자동으로 페이지 새로고침이 된다는걸 알았음.
  - form 태그 내부에 있는 input(type=text) 태그가 단 하나 존재하는 경우, 엔터 > submit 시킨다. 
  - 해결방법 : form태그의 onsubmit 속성을 이용해  `onsubmit="return false;"` 이렇게 속성값을 추가해준다.

- js파일을 모듈로 사용시 HTML내부의 script 태그안에 `type = "module"`을 추가해준다.

---

# 2023.01.28

## 목표
- [x] 삭제버튼이 왜 안되는지 이유를 알아내고 수정

## 진행하면서 알게된 내용
- 화살표함수의 축약형할때 축약을 할꺼면 제대로 축약을 하자! 원인은 
  축약을 안해놓고는 안에 return을 안써줬다 
  ex) .filter((ele) => {return 실행코드}) => .filter(ele => 실행코드)
  ! 몇번씩 이거 때문에 고생했으니 머리에 각인시키고 실수를 줄이자

---
