# example-kakao-login

카카오 로그인:oAuth 2.0 API 예제 소스 코드 입니다.

Front-end 환경은 Vue 입니다.  단일페이지(SPA) 입니다.  카카오 로그인 인증 / 로그아웃 / 연결끊기 기능이 있습니다. API 기능 구현은 재활용 고려하여  Javascript 로만 작업했습니다. API 허용 URL 은 localhost:4000 설정 되어 있습니다. vue-cli 을 설치하는 게 좋습니다.

> vue-kakao-login 을 사용하면 코딩이 더 쉬어집니다. 하지만 다른 언어 또는 다른 개발환경 고려하여 소스 재활용때문 사용하지 않았습니다.

## Use Case

1. Login 메뉴 접근
1. 카카오 로그인
    1. 사용인증기관 코드 획득
    1. Access 토큰 획득
1. 사용자 인증에 유효한 메뉴로 변경
1. 메뉴 접근 허용
1. Logout
    1. 토큰 소멸
1. Login 메뉴를 제외한 메뉴 접근 불가
1. 카카오 연결끊기
    1. Kakao Request API 호출
    1. 토큰 소멸

## 변경해야 할 사항

> localhost:4000 에서 테스트 가능 합니다.  별도로 카카오 API 어플리케이션을 관리하고 사용하고 있다면 이 항목은 해당 사항이 없습니다.

in package.json
~~~
...
  "scripts": {
    "serve": "vue-cli-service serve --port 4000",
...
~~~

## 빠른 시작

1.  setup
    ```
    npm install
    ```
1. Compiles and hot-reloads for development
    ```
    npm run serve
    ```


### Customize configuration

See [Vue-Cli Configuration Reference](https://cli.vuejs.org/config/).

See [Kakao Developers](https://developers.kakao.com/docs/latest/ko/kakaologin/common).

