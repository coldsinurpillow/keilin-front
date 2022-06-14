import styled from "styled-components"
import Announcement from "../../components/Announcement"
import Navbar from "../../components/Navbar"
import TopNavbar from "../../components/TopNavbar"
import Footer from "../../components/Footer";

const Container = styled.div`
  
`

const ContainerItems = styled.div`
  padding:50px; 
`
const Title = styled.h1`
  color:#000;
  padding-bottom: 20px;
`
const SubTitle = styled.h2`
  color:#000;
  padding-bottom: 20px;
`
const Desc = styled.p`
  width: 100%;
  font-size: 16px;
  padding-bottom: 10px;
  margin-left: 20px;
  margin-bottom: 10px;
`

const A = styled.a`
  font-size: 16px;
  padding-bottom: 10px;
  margin-left: 20px;
  color: #168858;
`

const Option = styled.p`
  font-size: 18px;
  font-weight: 300;
  padding-top: 10px;
  margin-left: 20px;
`

const Payment = () =>{
    return(
        <Container>
            <TopNavbar/>
            <Announcement/>
            <Navbar/>
            <ContainerItems>
                <Title>
                    В сети «Keitlin» расчёты производятся только в тенге.
                </Title>
                <SubTitle>
                    К оплате от частных лиц принимаем:
                </SubTitle>
                <Desc>
                    Банковские карты VISA и MasterCard, только онлайн при заказе товара с доставкой;
                </Desc>
                <SubTitle>
                    Безналичная оплата для юридических лиц:
                </SubTitle>
                <Desc>
                    Оплачивайте только после подтверждения наличия товара.
                    Доставка осуществляется после поступления денег на счёт магазина.
                    Для получения товара от плательщика необходим оригинал бухгалтерской доверенности (Форма Д1) и удостоверение личности получателя.
                </Desc>
            </ContainerItems>
            <Footer/>
        </Container>

    )
}

export default Payment