import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Search, ShoppingCartOutlined} from "@material-ui/icons";
import {Badge} from "@material-ui/core";
import {mobile} from "../responsive";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {logout} from "../redux/userRedux";
import {deleteProduct} from "../redux/cartRedux";
import axios from "axios";

const Container = styled.div`
  height: 60px;
  ${mobile({height: "50px"})}
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({padding: "10px 0px"})}
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({display: "none"})}
`
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({marginLeft: "5px"})}
`
const Input = styled.input`
  border: none;
  ${mobile({width: "50px"})}
`
const Logo = styled.h1`
  font-family: "Futura PT",sans-serif;
  font-weight: 600;
  margin-left: 10px;
  ${mobile({fontSize: "24px"})}
`

const Center = styled.div`
  flex: 1;
  text-align: center;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({flex: 3})}
`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  display: flex;
  align-items: center;
  ${mobile({fontSize: "12px", marginLeft: '7px'})}
`
const ContainerS = styled.div`
    position: relative;
`
const Point = styled.div`
  width: 8.5px;
  height: 8.5px;
  border-radius: 50%;
  background-color: #01d729;
  margin-left: 8px;
  border: 1px solid #fff;
  box-shadow:0 0 20px #01d729;
`
const Auto = styled.ul`
  position: absolute;
  left: 25px;
  top: 40px;
  width: 100%;
  background-color: white;
  z-index: 99999;
  list-style: none;
  margin: 0;
  padding: 0;
  box-shadow: 1px 1px 5px rgba(0,0,0,0.15);
  max-height: 240px;
  height: auto;
  overflow: auto;
`
const AutoItem = styled.li`
  padding: 10px;
  
  
  &:hover{
    background-color: rgb(180,180,180);
    cursor: pointer;
    transition: cubic-bezier(1,0,0,1).3s all;
  }
`

const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity)
    const user = useSelector(state=> state.user.currentUser);
    const dispatch = useDispatch();

    const [products, setProducts] = useState([])
    useEffect(()=>{
        const getProducts = async () => {
            try{
                const res = await axios.get('https://keitlin-server.herokuapp.com/api/products');
                setProducts(res.data)
            }catch (e) {}
        }
        getProducts();
    }, [])
    const [value, setValue] = useState('');

    const filteredProducts = products.filter(product => {
        return product.title.toLowerCase().includes(value.toLowerCase())
    })

    const handleClick = (e) => {
      e.preventDefault();
      dispatch(logout())
      dispatch(deleteProduct())
    }


  return(
      <Container>
        <Wrapper>
            <Left>
                <ContainerS>
                    <SearchContainer>
                        <Input
                            placeholder="Поиск"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                        <Search style={{ color: '#a19898', fontSize: 16 }}/>
                    </SearchContainer>
                    <Auto>
                        {
                            value ?
                                filteredProducts.map((product,index) => {
                                    return(
                                        <AutoItem>
                                            <Link to={`/product/${product._id}`}>
                                                {product.title}
                                            </Link>
                                        </AutoItem>
                                    )
                                })
                            : null
                        }
                    </Auto>
                </ContainerS>
            </Left>
            <Center>
                <Link to="/">
                    <Logo>
                        Keitlin
                    </Logo>
                </Link>
            </Center>
            <Right>
                {user ? <div style={{display: "flex"}}>
                        <MenuItem>
                            <span>
                                  <Link to="/profile">{user.username} </Link>
                            </span>
                            <Point></Point>
                        </MenuItem>
                        <MenuItem onClick={(e) => handleClick(e)}>Выход</MenuItem>
                </div>
                    : <div style={{display: "flex"}}>
                        <Link to="/register">
                            <MenuItem>РЕГИСТРАЦИЯ</MenuItem>
                        </Link>
                        <Link to="/login">
                            <MenuItem>ВОЙТИ</MenuItem>
                        </Link>
                    </div>}
                {/*{userAdmin ? <MenuItem><a href="https://localhost:3001">admin panel</a></MenuItem> : <div></div>}*/}
                <Link to="/cart">
                    <MenuItem>
                        <Badge badgeContent={quantity   } color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Link>
            </Right>
        </Wrapper>
      </Container>
  )
}

export default Navbar