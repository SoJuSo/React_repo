import React from "react";
import Hello from "./Hello";
import Wrapper from "./Wrapper";

function App() {
  const name = "react";
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: 24, // 기본 단위 px
    padding: "1rem", // 다른 단위 사용 시 문자열로 설정
  };

  return (
    <Wrapper>
      <Hello name="kim" color="yellow" />
      <div style={style}>{name}</div>
    </Wrapper>
  );
}

export default App;
