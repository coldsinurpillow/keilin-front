import styled from "styled-components";
import {mobile} from "../responsive";
import {useState} from "react";
import {login} from "../redux/apiCall";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Logo = styled.h1`
  font-family: "Futura PT" ,sans-serif;
  font-size: 70px;
  margin-bottom: 10px;
`
const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: white;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  border-radius: 10px;
  ${mobile({ width: "75%" })}
`
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
`
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  &:disabled{
    color: darkcyan;
    cursor: not-allowed;
  }
`
const Error = styled.span`
  color: darkred;
`
const Linki = styled.a`
  margin: 8px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`

const Login = () => {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    const {isFetching, error} = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const handleClick = (e) => {
      e.preventDefault()
        login(dispatch, {username, password})
    }
    return(
        <Container>
            <Wrapper>
                <Logo>Keitlin</Logo>
                <Title>Вход</Title>
                <Form>
                    <Input placeholder="username" onChange={(e)=>  setUsername(e.target.value)}/>
                    <Input placeholder="password" type="password" onChange={(e)=>  setPassword(e.target.value)}/>
                    <Button onClick={handleClick} disabled={isFetching}>Войти</Button>
                    {error && <Error>Что то пошло не так...</Error>}
                    <Link to="/register"><Linki>Создать новый аккаунт</Linki></Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login