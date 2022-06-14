import styled from 'styled-components'
import React, {useEffect, useState} from "react";
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Products = ({cat,sort,filters}) => {
    const [products, setProducts] = useState([]);
    const [filterProducts, setFilterProducts] = useState([]);
    //получение товаров с бд
    useEffect(()=>{
        const getProducts = async () => {
            try{
                const res = await axios.get(
                    cat
                        ? `https://keitlin-server.herokuapp.com/api/products?category=${cat}`
                        : "https://keitlin-server.herokuapp.com/api/products"
                );
                setProducts(res.data)
            }catch (e) {}
        }
        getProducts();
    }, [cat])

    useEffect(() => {
        cat &&
        setFilterProducts(
            products.filter((item) =>
                Object.entries(filters).every(([key, value]) =>
                    item[key].includes(value)
                )
            )
        );
    }, [products, cat, filters]);

    useEffect(() => {
        if ((sort === "новейший")) {
            setFilterProducts((prev) =>
               [...prev].sort((a,b) => a.createdAt - b.createdAt)
            )
        } else if((sort === "asc")){
            setFilterProducts((prev) =>
               [...prev].sort((a,b) => a.price - b.price)
            )
        }else {
            setFilterProducts((prev) =>
                [...prev].sort((a,b) => b.price - a.price)
            )
        }
    }, [sort])
//просто массива с товарами
    return(
        <Container>
            {cat
                ? filterProducts.map(item => <Product item={item} key={item.id}/>)
                : products.slice(0, 8)
                    .map((item) => <Product item={item} key={item.id}/>)}
        </Container>
    )
}

export default Products