# TODO-LIST 📋

## 기능 구현

### 할 일 입력

- 할 일을 입력할 수 있어야 한다.

### 할 일 목록

- 입력한 데이터(일)들을 목록으로 확인한다.
- 입력된 데이터를 수정 또는 삭제할 수 있어야 한다.
- 완료된 데이터는 완료 표시를 한다.

### 아이템

- 데이터를 구별할 고유한 키 값이 있어야 한다.
- 구성 요소
  - 제목\*
  - 내용\*
  - 생성 시간
  - 수정 시간
  - 완료 여부

---

## 시작하기

단 한 번의 코드로 리액트 개발에 자주 쓰이는 라이브러리를 설치함으로 손쉽게 시작할 수 있다.

[Create React App](https://create-react-app.dev/docs/getting-started)

## 고유한 키 값 입력

[uuid](https://www.npmjs.com/package/uuid)

## 날짜 입력

[Day.js](https://day.js.org/docs/en/installation/installation)

---

## 에러 발생 🚨

### 모달 스타일

- 완료한 아이템에 배경색과 투명도를 주었더니 안에 있던 DetailModal에도 스타일이 적용되었다.
- 해결 방안
  - 리턴 값은 하나의 태그만을 반환해야 한다. 그 점을 이용하여 하나의 빈 태그를 만들고, 그 안에 li 태그와 모달을 같은 선상에 넣기로 했다.

<div style="display: flex; justify-content: space-between">
<img width=49% src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/6de1f01c-1f0d-49bc-b7dd-1d785a203f3d/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-03-14_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_8.04.55.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230314T113245Z&X-Amz-Expires=86400&X-Amz-Signature=93701e3e13c50e46f0126120bd7df6e4d2cfac02a45edc73ab13f7fa838704f4&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA%25202023-03-14%2520%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE%25208.04.55.png%22&x-id=GetObject">

<img width=49% src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c88e092c-a494-4cb9-93a3-ac89a2040182/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-03-14_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_8.04.16.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230314T113318Z&X-Amz-Expires=86400&X-Amz-Signature=ec422a83cebb2e63cd1ce0aaaabfcc0fc4ab85ecf0120bd355e8b50981ad394d&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA%25202023-03-14%2520%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE%25208.04.16.png%22&x-id=GetObject">
</div>

<img style="margin-top: 1rem;" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f822f198-335f-40b7-8bc4-f96b7193e169/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-03-14_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_7.58.05.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230314T113449Z&X-Amz-Expires=86400&X-Amz-Signature=575e8eb73489e95b2c5d7d0db5c57c1366a75b18428e23fa0b5a0ac7be62fdf7&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA%25202023-03-14%2520%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE%25207.58.05.png%22&x-id=GetObject">

### 아이템 생성

- 생성하는 함수를 만들고 상태를 적용해야 하는데 현재의 앱 구조로는 props를 계속 전달해야 하는 번거로움이 발생했다.
- 해결 방안
  - 앱 구조를 다음과 같이 변경한다. 계속 하다보니 딱히 좋은 구조는 아닌 것 같지만 일단은 해결하는 데에 중점을 두었다.
- 현재의 앱 구조
  - App
    - Header
      - CreateModal
    - TodoList
      - TodoItem
        - DetailModal
- 변경하는 앱 구조
  - App
    - TodoList
      - Header
        - CreateModal
      - TodoItem
      - DetailModal

### 업데이트 시 다른 아이템들이 사라짐

<div style="display: flex; justify-content: space-between">
<img width=49% src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/126bf8d6-1b63-486a-a75c-bb07fccba771/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-03-15_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_6.38.38.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230315T104729Z&X-Amz-Expires=86400&X-Amz-Signature=688c5372ee1a581cddd75060796569a09b7d4aad4f0e9e1b3305c68af6a7c771&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA%25202023-03-15%2520%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE%25206.38.38.png%22&x-id=GetObject">

<img width=49% src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1921007d-ddbb-459c-841f-d882066eabac/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-03-15_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_6.39.20.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230315T104831Z&X-Amz-Expires=86400&X-Amz-Signature=39ae16e9d41ea73cefe54bf109ba733ae64e1eba20a8d6e4c379578c32b809bc&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA%25202023-03-15%2520%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE%25206.39.20.png%22&x-id=GetObject">
</div>

- setTodoList를 updateItem으로 갱신하는 과정에서 발생.
- 해결 방안
  - 갱신하기 전에 업데이트한 배열을 새로 만든다.
    - 투두 리스트를 돌면서 같은 아이디를 가진 아이템을 찾고, 내용을 업데이트한 배열로 만든다.

```jsx
// ...
setTodoList((prev) => {
  return [{ ...prev, ...updateItem }];
});

// 변경 코드
const UpdateTodoList = todoList.map((todo) => {
  if (todo.id === item.id) {
    return {
      ...todo,
      title: value.title,
      content: value.content,
      updatedAt: dayjs().format('YY.MM.DD HH:mm:ss'),
    };
  } else {
    return todo;
  }
});
setTodoList(UpdateTodoList);
```

```jsx
// 업데이트 전체 코드
const onUpdate = (e) => {
  e.preventDefault();

  if (!value.title || !value.content) return;

  const UpdateTodoList = todoList.map((todo) => {
    if (todo.id === item.id) {
      return {
        ...todo,
        title: value.title,
        content: value.content,
        updatedAt: dayjs().format('YY.MM.DD HH:mm:ss'),
      };
    } else {
      return todo;
    }
  });
  setTodoList(UpdateTodoList);

  onCloseUpdateModal();
};
```

---

## 완성된 화면

![todo](https://user-images.githubusercontent.com/103917901/225289150-e1d1027e-cd08-46be-ab3a-0561810afceb.gif)
