import styled from "styled-components";
import {Link} from "react-router-dom";

const Container = styled.div`
  
`
const NavContainer = styled.div`
  background-color: #ffefef;
  display: flex;
  align-items: center;
  justify-content: center;
`
const NavItems = styled.span`
  font-weight: 600;
  padding: 15px;
  cursor: pointer;
  
  &:hover{
    background-color: white;
  }
`
const Line = styled.hr`
    width: 0.1px;
  height: 25px;
  background-color: #a49e9e;
`

const NavCategories = () => {
  return (
      <Container>
          <NavContainer>
                  <NavItems>
                      <Link to={`/products/смартфоны`}>
                          Смартфоны
                      </Link>
                  </NavItems>
              <Line />
                  <NavItems>
                      <Link to={`/products/планшеты`}>
                          Планшеты
                      </Link>
                  </NavItems>
              <Line />
                  <NavItems>
                      <Link to={`/products/компьютеры`}>
                          Компьютеры
                      </Link>
                  </NavItems>
                <Line />
                  <NavItems>
                      <Link to={`/products/ноутбуки`}>
                          Ноутбуки
                      </Link>
                  </NavItems>
          </NavContainer>
      </Container>
  )
}

export default NavCategories