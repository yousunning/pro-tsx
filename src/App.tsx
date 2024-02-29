import React, { useState } from "react";

// 함수형 컴포넌트 정의
const App: React.FC = () => {
  // 상태 변수 count를 생성하고 초기값을 0으로 설정
  const [count, setCount] = useState<number>(0);

  // count를 증가시키는 함수랍니다.
  const increment = () => {
    setCount(count + 1);
  };

  // count를 감소시키는 함수
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default App;

// 'App.tsx'파일은 주로 애플리케이션의 주요 컴포넌트를 정의합니다.
// 이 파일은 애플리케이션의 레이아웃, 라우팅, 전역 상태관리 등의 주요 기능을 구성하는데 사용됩니다.
// 일반적으로 다른 컴포넌트들을 조합하여 애플리케이션의 구조를 정의하고, 필요한 기능을 제공합니다.

//index.tsx는 앱의 진입점이 되어 앱을 렌더링하고,
//App.tsx는 애플리케이션의 주요 구조를 정의하는 역할을 한다.
