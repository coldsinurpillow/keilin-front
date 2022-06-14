import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {userReq} from "../../reqMethod";
import styled from "styled-components";
import TopNavbar from "../../components/TopNavbar";
import Announcement from "../../components/Announcement";
import Navbar from "../../components/Navbar";
import "./profile.css"
import {Button} from "@material-ui/core";
import {format} from "timeago.js";
import ru from 'timeago.js/lib/lang/ru'
import * as timeago from 'timeago.js';
import {mobile} from "../../responsive";
import Footer from "../../components/Footer";


timeago.register('ru',ru)
const Container = styled.div``

const AllInfo = styled.div`
    display: flex;
  margin-left: 40px;
  ${mobile({flexDirection: "column",marginLeft: "5px"})}
`
const Left = styled.div`
  flex: 1;
  margin-right: 20px;
  ${mobile({marginRight: "5px"})}
`
const Right = styled.div`
  flex: 2;
  margin-right: 5px;
  ${mobile({flexDirection: "column" ,flex: "1",display: "none"})}
`
const Title = styled.h1`
    margin-bottom: 50px;
  margin-left: 40px;
`
const ID = styled.div`
  color: #7dd0a8;
  margin-bottom: 40px;
`
const Username = styled.div`
  color: #7dd0a8;
  margin-bottom: 40px;
`
const Admin = styled.a`
  color: #7dd0a8;
`
const Desc = styled.div`
  flex: 1;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 20px;
  margin: 50px 5px 40px 40px;
  ${mobile({marginLeft: "5px", display: "none"})}
`
const DescItem = styled.h4`
  font-weight: 300;
  margin-left: 40px;
  margin-bottom: 20px;
`
const OrderContainer = styled.div`
  flex: 3;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
  padding: 20px;
`
const Profile = () => {
    const [order,setOrder] = useState([])
    const user = useSelector(state=> state.user.currentUser);


    useEffect(() => {
        const getOrders = async () => {
          try {
              const res= await userReq.get(`orders/find/${user._id}`)
              setOrder(res.data)
          }catch (e) {

          }
        }
        getOrders()
    },[])


    const Button = ({type}) => {
        return <button className={"widgetLgButton " + type}>{type}</button>
    }
    return(
        <Container>
            <TopNavbar/>
            <Announcement/>
            <Navbar/>
            <Title>Личный кабинет</Title>
            <AllInfo>
                <Left>
                    <div className="widgetLg">
                        <div className="widgetLgTitle">Ваш логин: <Username>{user?.username}</Username></div>
                        <div className="widgetLgTitle">Ваш ID: <ID>{user?._id}</ID></div>
                        {
                            user?.isAdmin ? <Admin href="https://localhost:3001/login" target="_blank">admin</Admin> : null
                        }
                    </div>
                </Left>
                <Right>
                    <OrderContainer>
                        <h3 className="widgetLgTitle">Последний транзакции</h3>
                        <table className="widgetLgTable">
                            <tr className="widgetLgTr">
                                <th className="widgetLgTh">Номер транзакции</th>
                                <th className="widgetLgTh">Адресс</th>
                                <th className="widgetLgTh">Почтовый индекс</th>
                                <th className="widgetLgTh">Дата</th>
                                <th className="widgetLgTh">Сумма</th>
                                <th className="widgetLgTh">Статус</th>
                            </tr>
                            {order.map((order,index) => (
                                <tr className="widgetLgTr">
                                    <td className="widgetLgUser">
                                        <span className="widgetLgName">{order?._id}</span>
                                    </td>
                                    <td className="widgetLgDate">
                                        {order?.address.country}, {order?.address.city}, {order?.address.line1}
                                    </td>
                                    <td className="widgetLgDate">
                                        {order?.address.postal_code}
                                    </td>
                                    <td className="widgetLgDate">{format(order?.createdAt, "ru")}</td>
                                    <td className="widgetLgAmount">{order?.amount} KZT</td>
                                    <td className="widgetLgStatus">
                                        <Button type={order?.status}/>
                                    </td>
                                </tr>
                            ))}
                        </table>
                    </OrderContainer>
                </Right>
            </AllInfo>
            <Desc>
                <Title>Справка</Title>
                <DescItem>
                    Статус "pending" - заказ в ожидании
                </DescItem>
                <DescItem>
                    Статус "approved" - заказ одобрен
                </DescItem>
                <DescItem>
                    Статус "declined" - заказ отклонен
                </DescItem>
            </Desc>
            <Footer/>
        </Container>
    )
}

export default Profile