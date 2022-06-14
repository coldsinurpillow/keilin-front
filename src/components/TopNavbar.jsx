import { Link } from "react-router-dom";
import styled from "styled-components";
import {mobile} from "../responsive";

const Container = styled.div`
  padding: 10px;
`
const NavbarItem = styled.div`
  font-size: 14px;
  line-height: 17px;
  color: #000;
  margin-left: 30px;
  ${mobile({marginLeft: "10px"})}
`
const NavItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const TopNavbar = () => {
    return(
        <Container>
            <NavItems>
                <Link to={'/about'}>
                <NavbarItem>О нас</NavbarItem>
                </Link>
                <Link to={'/ship'}>
                    <NavbarItem>Доставка</NavbarItem>
                </Link>
                <Link to={'/payment'}>
                    <NavbarItem>Оплата</NavbarItem>
                </Link>
                <Link to={'/obmen-vozvrat'}>
                    <NavbarItem>Обмен и возврат</NavbarItem>
                </Link>
            </NavItems>
        </Container>
    )
}

export default TopNavbar