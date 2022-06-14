import React, {useEffect, useState} from "react";
import {publicReq} from "../reqMethod";
import "./test.css"
import Flickity from "react-flickity-component";
import styled from "styled-components";
import {mobile} from "../responsive";

const Image = styled.img`
  margin-left: 100px;
  height: 300px;
  object-fit: cover;
  ${mobile({ marginLeft: '' })}
`

const Carusel = ({id}) => {
    const [product, setProduct] = useState([]);
    useEffect(()=>{
        const getProduct = async () => {
            try {
                const res = await publicReq.get("/products/find/"+id)
                setProduct(res.data.img)
            }catch (e){}
        }
        getProduct()
    },[])
    return(
        <Flickity>
            {
                product.map((key) => (
                    <Image src={key} alt=""/>
                ))
            }
        </Flickity>
    )
}
export default Carusel
