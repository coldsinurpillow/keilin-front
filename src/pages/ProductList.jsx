import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import NewsNow from "../components/NewsNow";
import Footer from "../components/Footer";
import Products from "../components/Products";
import {mobile} from "../responsive";
import {useLocation} from "react-router-dom";
import React, {useState} from "react";
import TopNavbar from "../components/TopNavbar";
import ScrollButton from "../components/ScrollButton";

const Container = styled.div``
const Title = styled.h1`
  margin: 20px;
  text-transform: capitalize;
`
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`
const Option = styled.option`
`

const ProductList = () =>{
    const location = useLocation();
    const cat = (location.pathname.split("/")[2])

    const [filters, setFilter] = useState({})
    const [sort, setSort] = useState("Новейший")

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilter({
            ...filters,
            [e.target.name]: value,
        });
    };
    return(
        <Container>
            <ScrollButton/>
            <TopNavbar/>
            <Announcement/>
            <Navbar/>
            <Title>{cat}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Фильтр продуктов:</FilterText>
                    <Select name="size" onChange={handleFilters}>
                        <Option disable>
                            Память
                        </Option>
                        <Option>128Gb</Option>
                        <Option>256Gb</Option>
                        <Option>512Gb</Option>
                        <Option>1Tb</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Сортировка продуктов:</FilterText>
                    <Select onChange={e=>setSort(e.target.value)}>
                        <Option value="newest">Новейший</Option>
                        <Option value="asc">Цена (asc)</Option>
                        <Option value="desc">Цена (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat={cat} filters={filters} sort={sort} />
            <NewsNow/>
            <Footer/>
        </Container>
    )
}

export default ProductList