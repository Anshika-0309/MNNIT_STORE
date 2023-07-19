import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcements from "../components/Announcements";
import MiscellaneousProducts from "../components/MiscellaneousProducts";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import CategoriesBar from "../components/CategoriesBar";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(203, 196, 197);
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}  
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}  
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}  
`;
const Option = styled.option``;

const Miscellaneous = () => {
  const location=useLocation();
  const cat=location.pathname.split("/")[1];
  // console.log(cat);
  const [filters, setFilters]=useState({});
  const [sort, setSort]=useState("newest");
  const handleFilters=(e)=>{
    const value=e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value
    });
  };
  // console.log(filters);
  return (
    <Container>
      <Announcements />
      <Navbar />
      <CategoriesBar/>
      <Title>MISCELLANEOUS</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="categories" onChange={handleFilters}>
            <Option>
              All Products
            </Option>
            <Option>Bathing</Option>
            <Option>Tooth Care</Option>
            <Option>Hair Products</Option>
            <Option>Other</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e)=>setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <MiscellaneousProducts cat={cat} filters={filters} sort={sort}/>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Miscellaneous;
