import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import NewsNow from "../components/NewsNow";
import Footer from "../components/Footer";
import {Add, Remove} from "@material-ui/icons";
import {mobile} from "../responsive";
import {useLocation} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {publicReq} from "../reqMethod";
import {addProduct} from "../redux/cartRedux";
import {useDispatch, useSelector} from "react-redux";
import Carusel from "../components/carusel";
import TopNavbar from "../components/TopNavbar";
import ScrollButton from "../components/ScrollButton";
const Container = styled.div`
  
`
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`
const ImgContainer = styled.div`
  flex: 1;
`
const Image = styled.img`
  height: 70vh;
  object-fit: cover;
  ${mobile({ height: "40vh", width: "90vw", })}
`
const Title = styled.h1`
  font-weight: 200;
  margin-bottom: 20px;
`
const Desc = styled.span`
  margin: 20px 0px;
  white-space: pre-line;
`
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`
const Price = styled.p`
  font-weight: 100;
  font-size: 40px;
  margin-top: 20px;
`
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
  margin-right: 5px;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 0.5px solid gray;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  
  &:hover{
    background-color: aliceblue;
  }
`

const Product = () =>{
    const location = useLocation()
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const dispatch = useDispatch()
    const user = useSelector(state=> state.user.currentUser);
    const [buttonText, setButtonText] = useState('ДОБАВИТЬ В КОРЗИНУ') 


    useEffect(()=>{
        const getProduct = async () => {
            try {
                const res = await publicReq.get("/products/find/"+id)
                setProduct(res.data)
                console.log(res.data)
            }catch (e){}
        }
        getProduct()
    },[id])

    const handleQuantity = (type) => {
      if(type === "dec"){
          quantity > 1 && setQuantity(quantity-1)
        
      }else {
          setQuantity(quantity+1)
      }
    }

    const handleClick = () => {
      //Update корзины
        if(user){
            dispatch(
                addProduct({...product, quantity, color, size})
            )
            setButtonText("ТОВАР В КОРЗИНЕ")
        }else {
            alert("Вы не верефецированы")
        }
    }
    return(
        <Container>
            <ScrollButton/>
          <TopNavbar/>
            <Announcement/>
            <Navbar/>
            <Wrapper>
                <ImgContainer>
                    <Carusel id={id}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Desc>{product.desc}</Desc>
                    <Price>{product.price?.toLocaleString()} KZT</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            {product.bgColor?.map((c) => (
                                <FilterColor color={c} key={c} onClick={()=>setColor(c)}/>
                            ))}
                        </Filter>
                        <Filter>
                            <FilterTitle>Size: </FilterTitle>   
                            {
                              product.size
                            }               
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={() => handleQuantity("dec")}/>
                            <Amount>{quantity}</Amount>
                            <Add onClick={() => handleQuantity("inc")}/>
                        </AmountContainer>
                        <Button onClick={handleClick}>{buttonText}</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <NewsNow/>
            <Footer/>
        </Container>
    )
}

export default Product