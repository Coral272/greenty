import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Green = styled.h1`
  width: 300px;
  height: 600px;
  background-color: ${(props) => props.theme.green};
`;

const Yellow = styled.h2`
  font-size: 32px;
  color: ${(props) => props.theme.yellow};
`;

const White = styled.h1`
  font-size: 36px;
  color: ${(props) => props.theme.white.lighter};
`;

const Card = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.theme.white.darker};
  border-radius: 20px;
  /* border: 2px solid ${(props) => props.theme.green}; */
  margin: 20px;
`;

function App() {
  return (
    <Container>
      <Green>
        <White>Greenty</White>
        <Yellow>This is a Greenty app!</Yellow>
      </Green>
      <Card></Card>
    </Container>
  );
}

export default App;
