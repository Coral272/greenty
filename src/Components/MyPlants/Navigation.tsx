import styled from "styled-components";

const Nav = styled.nav`
  width: 300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.green};
  padding: 20px;
`;
const Row = styled.div``;
const Logo = styled.svg`
  margin-right: 50px;
`;
const Items = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Item = styled.li`
  color: ${(props) => props.theme.white.lighter};
  margin-bottom: 26px;
  &:hover {
    color: ${(props) => props.theme.yellow};
  }
`;

function Navigation() {
  return (
    <Nav>
      <Row>
        <Logo />
        <Items>
          <Item>Home</Item>
          <Item>Devices</Item>
          <Item>Settings</Item>
        </Items>
      </Row>
      <Row>
        <div>Log in</div>
      </Row>
    </Nav>
  );
}

export default Navigation;
