# goodneighbor

## 👩‍🏫PROJECT 소개

---

나의 주변 이웃들과 함께 내가 가진 물건을 교환하거나 남는 물건을 나눔하는 웹페이지

🗓️ **작업기간** : 2022.9.19 → 2022/10.3

👨‍💻 **투입인원** : 4명

📒 **주요업무** 

- 기획 및 각 페이지 틀 디자인
- rest api 구현 및 백엔드 데이터베이스 관리
- 전체적인 버그 수정
- 깃 관리
- 각 페이지 기능 자바스크립트 구현
- 상품페이지 디자인 및 최적화
- mvc구조 구축
- db 설계

🌱 **스킬 및 사용툴**

`HTML5` `css3` `Bootstrap`   `git && github`  `jquery` `JavaScript` `Nodejs` `visualStudioCode` `websocket`

### 데이터베이스 설계

![스크린샷 2022-10-15 오전 1.26.09.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/68e2ac56-72ea-4bfb-b870-959a13a67f71/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-10-15_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_1.26.09.png)

### 메인 페이지

**메인 페이지 기획** 

- 메인 페이지 css 기획
    - css 특성 stroke를 사용하여 높이 계산후 선으로 그리는 듯한 느낌을 주는 메인페이지 기획
    - 페이지의 정체성을 설명

![ezgif.com-gif-maker (10).gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cda89fb8-331c-46cb-baeb-f364fd0c25d8/ezgif.com-gif-maker_(10).gif)

**네비게이션 바 구현 (**  `css` `JavaScript` )

- 프론트 엔드
    - 네비게이션 바 구현 및 디자인
    - 꼭대기에 가면 투명해지며 스크롤 다운하면 위로 사라지도록 css 및 자바스크립트로 구현
- 백엔드
    - 세션을 이용하여 로그인, 로그아웃 시 보이는 ui를 다르게 함( 로그인 → logout ,우리동네 → 내정보 )
    - 로그인 성공시 오른쪽 하단에 상품추가 버튼이 생김

![ezgif.com-gif-maker (19).gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5a2a9150-bd99-4f49-898e-77ba48922715/ezgif.com-gif-maker_(19).gif)

**로그인 모달(**  `css` `JavaScript` `jquery` `axios` `nodejs` `sequlize` `mysql`)

- 프론트 엔드
    - 로그인 버튼을 누르면 로그인 모달이 뜨도록 자바스크립트로 구현
    - 로그인시 정규표현식으로 유효성 검사
- 백엔드
    - 로그인 요청 정보 확인 후, 로그인 성공 시 세션 생성

![ezgif.com-gif-maker (1).gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/dd838801-a4a1-4247-9b96-baa209542234/ezgif.com-gif-maker_(1).gif)

**회원가입 모달(**  `css` `JavaScript` `jquery` `axios` `nodejs` `sequlize` `카카오맵 api` `mysql`)

- 프론트 엔드
    - navbar의 동네위치를 누르면 회원가입 모달이 뜨도록 자바스크립트로 구현
    - 카카오맵 api를 사용하여 정확한 위치가 찍혀야만 다음 회원가입 단계로 넘어가도록 구현
    - 회원 정보 입력시 유효성 검사를 통해 아이디, 비밀번호의 형태가 올바른지 검사
    - 형식에 맞게 입력시 axios로 백엔드에 회원 정보를 전달
- 백엔드
    - 중복되는 아이디 혹은 유저가 있다면 회원가입 실패를 전달
    - 중복이 없다면 회원정보를 user table에 저장후 성공을 프론트로 반환

![ezgif.com-gif-maker (13).gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8fda9cc7-7d05-4bdb-b280-50821d08a21f/ezgif.com-gif-maker_(13).gif)

**상품 추가 모달(**  `css` `JavaScript` `jquery` `axios` `nodejs`  `카카오맵 api` `multer` `mysql`)

- 프론트 엔드
    - 로그인 시 보이도록만 구현(세션 이용)
    - 오른쪽하단 상품추가 버튼 클릭 시 모달을 띄우도록 자바스크립트로 구현
    - 사진을 넣었을 경우, 미리보기가 바로바로 보이도록 구현
- 백엔드
    - multer를 이용한 파일 업로드 및 db에 상품 정보 등록

![ezgif.com-gif-maker (20).gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/19f1646e-9a0f-4866-9996-eb0aea94dee5/ezgif.com-gif-maker_(20).gif)

### 상품 페이지

**상품 목록 페이지(**  `css` `JavaScript` `jquery` `axios` `nodejs`  `sequlize` `mysql`)

- 프론트 엔드
    - 메인페이지와 비슷한 느낌을 주기위해  path(svg)와 css를 활용해 장바구니 그림그리는 듯한 느낌을 줌
    - 한 줄에 보이는 상품 목록의 개수가 화면 크기에 따라 달라지도록 grid와 미디어쿼리로 반응형 구현
    - 스크롤 바닥을 감지하면 3개씩 받아오도록 구현(무한 스크롤)

![ezgif.com-gif-maker (18).gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b501ef83-0949-4259-b0f9-b159d9376c5a/ezgif.com-gif-maker_(18).gif)

            

- 프론트 엔드
    - 메인페이지와 비슷한 느낌을 주기위해  path(svg)와 css를 활용해 장바구니 그림그리는 듯한 느낌을 줌

![ezgif.com-gif-maker (14).gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/23d2f8f3-b550-4d58-9124-a72fb48273d5/ezgif.com-gif-maker_(14).gif)

- 백엔드
    - 회원가입 시 등록한 주소 근처의 상품만 보이도록 구현
    - 비로그인 시 전체 상품을 보여줌

![ezgif.com-gif-maker (15).gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b42fbf47-36f6-4513-b6f7-99dee32fb3c7/ezgif.com-gif-maker_(15).gif)

### 마이페이지

마이페이지 찜, 내상품, 채팅목록**(**  `css` `JavaScript` `jquery` `axios` `nodejs` `mysql`)

- 프론트 엔드
    - 찜리스트, 내 상품목록, 채팅방을 클릭시 해당하는 정보가 보여지도록 구현
- 백엔드
    - 세션을 검사해 유저의 정보를 받아와 본인의 상품, 채팅리스트, 찜 리스트를 select

![ezgif.com-gif-maker (16).gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/714e6a1a-253a-4eae-89ba-57913ad0c60e/ezgif.com-gif-maker_(16).gif)

### 체팅 모달

체팅 기능 구현**(**  `css` `JavaScript` `jquery` `axios` `nodejs` `mysql` `websocket`)

- 프론트 엔드
    - 체팅방 리스트에 원하는 유저의 체팅방을 클릭시 모달이 뜨도록 자바스크립트로 구현
    - 웹 소켓 사용
    - 파싱한 채팅 내용을 받아와 로그인된 맴버 아이디가 다를 시 왼쪽, 같을 시 오른쪽으로 정렬
- 백엔드
    - 체팅 db를 고유한 이름을 가진 체팅 db 이름으로 탐색하여 존재하면 join, 존재하지 않으면 db에 방      생성후 join
    - 프론트에서 체팅내용을 받아 sequlize concat을 사용하여 기존에 있던 문자열에 붙여 넣도록 구현
