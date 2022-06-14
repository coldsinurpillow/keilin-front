import styled from "styled-components";
import {Facebook, Instagram, MailOutline, Phone, Room, Twitter} from "@material-ui/icons";
import {mobile} from "../responsive";
import {Link} from "react-router-dom";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`
const Right = styled.div`
  flex: 1;
  padding: 20px;
`
const Title = styled.h3`
  margin-bottom: 30px;
`
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`

const Logo = styled.h1`
  font-family: "Futura PT",sans-serif;
  font-weight: 600;
`
const Desc = styled.p`
  margin: 20px 0px;
`
const SocialContainer = styled.div`
  display: flex;
`
const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props=>props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`
const Payment = styled.img`
  width: 30%;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Keitlin</Logo>
                <Desc>
                    «Keitlin» - Казахстанский интернет-магазин электроники.<br/>
                    График работы: Пн-Сб 9:00 - 20:00
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999" href="https://facebook.com" target="_blank">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F" href="https://instagram.com" target="_blank">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE" href="https://twitter.com" target="_blank">
                        <Twitter />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Полезные ссылки</Title>
                <List>
                    <ListItem>
                        <Link to='/'>
                            Главная
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link to='/cart'>
                            Корзина
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link to='/profile'>
                            Мой Аккаунт
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link to='/payment'>
                            Оплата
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link to='/ship'>
                            Доставка
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link to='/about'>
                            О нас
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link to='/obmen-vozvrat'>
                            Обмен и возврат
                        </Link>
                    </ListItem>
                </List>
            </Center>
            <Right>
                <Title>Контакты</Title>
                <ContactItem>
                    <Room style={{marginRight: '10px'}}/>ул. Бейбитшилик, 39, Нур-Султан
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight: '10px'}}/> +7 (775) 319 40 97 
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight: '10px'}}/> contact@keitlin.kz
                </ContactItem>
                <Payment src="https://images-ext-1.discordapp.net/external/4PyB3b2iuoo0fsHK2qYloE5eHp3iu213yN4nAJyQglE/https/i.ibb.co/Qfvn4z6/payment.png"></Payment>
            </Right>
        </Container>
    )
}

export default Footer