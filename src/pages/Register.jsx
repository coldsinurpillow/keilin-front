import styled from "styled-components";
import {mobile} from "../responsive";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {register} from "../redux/apiCall";
import {useHistory} from "react-router-dom";
import Success from "./Success";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: white;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  border-radius: 10px;
  ${mobile({ width: "75%" })}
`
const Logo = styled.h1`
  font-family: "Futura PT" ,sans-serif;
  font-size: 70px;
  margin-bottom: 10px;
`
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`
const Error = styled.span`
  color: darkred;
`
const SuccessMes = styled.span`
  color: #47a61f;
`

const Register = () => {
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const {isFetching, error} = useSelector((state) => state.user)
    const {success} = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const handleClick = (e) => {
        e.preventDefault();
        register(dispatch, {username,email,password})
    }

    return(
        <Container>
            <Wrapper>
                <Logo>Keitlin</Logo>
                <Title>Регистрация</Title>
                <Form>
                    <Input placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
                    <Input placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
                    <Input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
                    <Agreement>
                        Создавая учетную запись, я даю согласие на обработку моих персональных данных в соответствии с <b>ПОЛИТИКОЙ КОНФИДЕНЦИАЛЬНОСТИ</b><br/>
                        {error && <Error>Что то пошло не так...</Error>}
                        {success && <SuccessMes>Регистрация прошла успешно</SuccessMes>}
                    </Agreement>
                    <Button onClick={handleClick} disabled={isFetching}>СОЗДАТЬ</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register