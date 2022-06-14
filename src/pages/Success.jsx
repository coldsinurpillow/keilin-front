import styled from "styled-components";
import {Link, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {userReq} from "../reqMethod";
import axios from "axios";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  max-width: 100vw;
  background-color: #0a0b0d;
  color: white;
  display: grid;
  place-items: center;
`
const PaymentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Logo = styled.h1`
  font-family: "Futura PT", sans-serif;
  font-size: 70px;
  color: white;
`
const SuccessContainer = styled.button`
  border: 1px solid #282b2f;
  padding-left: 3rem;
  padding-right: 3rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: 24px;
  font-weight: 500;
  border-radius: 0.4rem;
  background-color: #3773f5;
  color: #000;
`
const Details = styled.div`
  font-size: 1.2rem;
  text-align: center;
  margin-top: 1rem;
  font-weight: 500;
  color: #63656b;
`




const Success = () => {
    const location = useLocation();
    //in Cart.jsx I sent data and cart. Please check that page for the changes.(in video it's only data)
    const data = location.state.stripeData;
    const cart = location.state.products
    const currentUser = useSelector((state) => state.user.currentUser);
    const [orderId, setOrderId] = useState(null);

    useEffect(() => {
        const createOrder = async () => {
            try {
                const res = await userReq.post("/orders", {
                    header:{token: `test ${currentUser.accessToken}`},
                    userId: currentUser._id,
                    products: cart.products.map((item) => ({
                        productId: item._id,
                        quantity: item.quantity,
                    })),
                    amount: cart.total,
                    address: data.billing_details.address,
                });
                setOrderId(res.data._id);
            } catch {}
        };
        data && createOrder();

    }, [cart, data, currentUser]);


    return(
        <Wrapper>
            <PaymentContainer>
                <Link to='/'>
                    <Logo>
                        Keitlin
                    </Logo>
                </Link>
                <SuccessContainer>
                    {orderId
                        ? `Заказ был создан успешно. Ваш номер заказа - ${orderId}`
                        : `Успешно. Ваш заказ готовится...`}
                </SuccessContainer>
                <Details>
                    Вы совершили успешную покупку. Спасибо, что выбрали магазин Keitlin!
                </Details>
                <Details>
                    Чтобы продолжить покупки, нажмите на надпись «Keitlin»
                </Details>
            </PaymentContainer>
        </Wrapper>
    )
}
export default Success