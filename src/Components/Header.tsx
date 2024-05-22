import styled from "styled-components";
import { ReactComponent as LogoGreenty } from "../logo-greenty.svg";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 150px;
  border: 3px solid ${(props) => props.theme.green.darker};
  padding: 20px 30px;
`;

const LogoArea = styled.div`
  display: flex;
  align-items: end;
  margin-bottom: 8px;
`;
const Logo = styled(LogoGreenty)`
  width: 250px;
  height: 80px;
`;
const Subtitle = styled.span`
  font-size: 16px;
  color: ${(props) => props.theme.black.lighter};
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: end;
  margin-bottom: 8px;
`;

const Items = styled.ul`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-top: 8px;
`;

const Item = styled.li`
  font-size: 16px;
  color: ${(props) => props.theme.black.darker};
  margin-left: 20px;
`;

const SubItem = styled(Item)`
  font-size: 12px;
  color: ${(props) => props.theme.black.lighter};
`;

function Header() {
  return (
    <Nav>
      <LogoArea>
        <Link to="/">
          <Logo />
        </Link>
        <Subtitle>식물 커뮤니티(사이트 한마디정의)</Subtitle>
      </LogoArea>
      <Menu>
        <Items>
          <SubItem>
            <Link to="/">회원가입</Link>
          </SubItem>
          <SubItem>
            <Link to="/">로그인</Link>
          </SubItem>
        </Items>
        <Items>
          <Item>
            <Link to="/community">커뮤니티</Link>
          </Item>
          <Item>
            <Link to="/search">식물검색</Link>
          </Item>
          <Item>
            <Link to="/my-plants">식물일지</Link>
          </Item>
        </Items>
      </Menu>
    </Nav>
  );
}

export default Header;
