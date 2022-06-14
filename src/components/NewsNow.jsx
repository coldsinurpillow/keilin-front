import {Send} from "@material-ui/icons";
import styled from "styled-components";
import {mobile} from "../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const Title = styled.h1`
  font-size: 70px;
  margin: 20px;
  ${mobile({ fontSize: "64px", textAlign: 'center' })}
`
const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
  ${mobile({ width: "80%" })}
`
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #66d3d3;
  color: white;
`

const NewsNow = () =>{
    const handleClick = (e) => {
      e.preventDefault()
        const test = document.querySelector('#test').value
      if(test == null || test == ""){
          alert("Ошибка! Поле пустое")
      } else {
          alert("Вы подписались на нашу новостную рассылку")
      }

      console.log(test)
    }

    return(
        <Container>
            <Title>Новостная рассылка</Title>
            <Description>
                Получайте своевременные обновления от ваших любимых продуктов.
            </Description>
            <InputContainer>
                <Input placeholder="Ваш email" id="test" />
                <Button onClick={(e) => handleClick(e)}>
                    <Send />
                </Button>
            </InputContainer>
        </Container>
    )
}

export default NewsNow