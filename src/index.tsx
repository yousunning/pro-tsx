import React from "react";
import ReactDOM from "react-dom";
import App from "./App.tsx";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
// React애플리케이션의 진입 지점(entry point)역할
// React애플리케이션은 대부분 단일 체이지 애플리케이션(SPA)으로 구성
//일반적으로 하나의 HTML파일과 js번들을 사용하여 동적으로 컨텐츠를 렌더링합니다.

//애플리케이션의 루트 컴포넌트를 렌더링하고 DOM에 삽입하는 역할
//보통 이 파일에서는 React의 'ReactDOM.render()'함수를 사용하여 루트 컴포넌트를 지정된 DOM요소에 렌더링한다.

//'ReactDOM.render()'함수를 사용하여 '<App />'컴포넌트를 'id'가 'root'인 DOM요소에 렌더링합니다.
// 이는 React 애플리케이션에서 가장 기본적인 렌더링 방식.

//또한 '.tsx'확장자는 TypeScript를 사용하여 작성된 React컴포넌트를 지칭합니다.
// 따라서 'index.tsx'파일은 TypeScript로 작성된 React 애플리케이션의 진입지점을 나타내는 것이 일반적이다.
