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

const Desc = styled.p`
  font-size: 16px;
  padding-bottom: 10px;
  margin-left: 20px;
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
  padding-bottom: 10px;
`

const About = () =>{
    return(
        <Container> 
            <TopNavbar/>
            <Announcement/>
            <Navbar/>
            <ContainerItems> 
                <Title>
                    «Keitlin» - Казахстанский интернет-магазин электроники
                </Title>
                <Title>
                    Наша миссия:
                </Title>
                <Desc>
                    Раскрыть свой потенциал и делать жизнь людей ярче, а быт комфортнее.
                </Desc>
                <Title>
                    Наш девиз:
                </Title>
                <Desc>
                    Качественно, легко и быстро!
                </Desc>
                <Title>
                    Ценности компании:
                </Title>
                <Desc>
                    Честность, командный дух, профессионализм, свобода и ответственность, забота о клиенте, лидерство, креативность.
                </Desc>
                <br/>
                <Option>
                    В «Keitlin» широкий ассортимент товаров. Мы продаём только сертифицированную технику мировых брендов, с заводской гарантией и последующим сервисом.
                </Option>
                <Option>
                    Совершить покупку можно в интернет-магазине www.keitlin.kz.
                </Option>
                <Option>
                    Головной офис расположен в городе Нур-Султан.
                </Option>
                <Title>
                    Номера:
                </Title>
                <Desc>
                    +7 (775) 319 40 97 <br/>
                    +7 (7172) 24 77 77
                </Desc>
                <Title>
                    Социальные сети:
                </Title>
                <A href="https://www.instagram.com/" target="_blank">
                    Instagram
                </A>
            </ContainerItems>
            <Footer/>
        </Container>

    )
}

export default About