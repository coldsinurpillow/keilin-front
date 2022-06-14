import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import {Add, Remove} from "@material-ui/icons";
import {mobile} from "../responsive";
import {useDispatch, useSelector} from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import React, {useEffect, useState} from "react";
import {userReq} from "../reqMethod";
import {Link, useHistory} from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete';
import {deleteProduct} from "../redux/cartRedux";
import TopNavbar from "../components/TopNavbar";
import ScrollButton from "../components/ScrollButton";

const KEY = "pk_test_51KcAcJGO0RGzcXNzbpk6O8G4O3UhdL5OYxbGdiY1fZGy2WX6Pf0ouEHis0IJFPJMSyECtCPekdom2tM64F3Z2si500hZzmq8Yr";

const Container = styled.div`
`
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
          props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 170px;
  margin-bottom: 10px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  margin-bottom: 10px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch();

    // const [idProd, setIdProd] = useState(0)
    // const [prodPrice, setProdPrice] = useState(0)
    
    const history = useHistory()
    const [stripeToken, setStripeToken] = useState(null)
    const onToken = (token) =>{
        setStripeToken(token);
    }

    const handleDelete = (index, priceProd) => {
      console.log(index,priceProd)
      dispatch(deleteProduct({idProd: index, prodPrice: priceProd}))
    }


    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await userReq.post("/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: cart.total*100,
                });
                history.push("/success", {
                    stripeData: res.data,
                    products: cart, });
            } catch {}
        };
        stripeToken && makeRequest();
    }, [stripeToken, cart.total, history]);
    return(
        <Container>
            <ScrollButton/>
          <TopNavbar/>
          <Announcement />
            <Navbar/> 
            <Wrapper>
                <Title>ВАША КОРЗИНА</Title>
                <Top>
                    <Link to="/">
                        <TopButton>ПРОДОЛЖИТЬ ПОКУПКИ</TopButton>
                    </Link>
                </Top>
                <Bottom>
                    <Info>
                        {cart.products.map((products, index)=>(
                             <Product>
                                 <ProductDetail>
                                      <Image
                                         src={products.img[0]}></Image>
                                <Details>
                                    <ProductName><b>Product: </b>{products.title}</ProductName>
                                    <ProductId><b>ID: </b>{products._id}</ProductId>
                                    <ProductColor color={products.color}/>
                                    <ProductSize><b>Size: </b>{products.size}</ProductSize>
                                </Details>
                                </ProductDetail>
                                <PriceDetail>
                                <ProductAmountContainer>
                                    <ProductAmount>
                                        {products.quantity}
                                    </ProductAmount>
                                    <button onClick={() => {handleDelete(index, products.price)}}>
                                        <DeleteIcon/>
                                    </button>
                                </ProductAmountContainer>
                                <ProductPrice>
                                    {products.price} KZT
                                </ProductPrice>
                                </PriceDetail>
                                 <Hr />
                             </Product>
                        ))}
                        <Hr />
                    </Info>
                    <Summary>
                        <SummaryTitle>Краткое описание заказа</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Промежуточный итог</SummaryItemText>
                            <SummaryItemPrice>{cart.total} KZT</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Предполагаемая доставка</SummaryItemText>
                            <SummaryItemPrice>3.000 KZT</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Скидка На Доставку</SummaryItemText>
                            <SummaryItemPrice>0 KZT</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Итог</SummaryItemText>
                            <SummaryItemPrice>{cart.total} KZT</SummaryItemPrice>
                        </SummaryItem>
                        <StripeCheckout
                            name="Keitlin Shop"
                            image="https://sun9-63.userapi.com/impg/eKIXDV8NWyaJFYfXC2mR-MO46KT6ztG7fEa9sQ/IF5pwtH0Dmc.jpg?size=300x300&quality=96&sign=a520aae9e1ad052bdc26de4a20e8c68f&type=album"
                            billingAddress
                            shippingAddress
                            description={`Your total is ${cart.total} KZT`}
                            amount={cart.total*100}
                            token={onToken}
                            stripeKey={KEY}
                            currency="KZT"
                        >
                            <Button>
                                Оформить заказ прямо сейчас
                            </Button>
                        </StripeCheckout>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Cart