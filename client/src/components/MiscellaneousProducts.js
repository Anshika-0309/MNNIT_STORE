import styled from "styled-components";
// import { stationeryProducts } from "../data";
import MiscellaneousProduct from "./MiscellaneousProduct";
import axios from "axios";
import {useState, useEffect} from "react";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const MiscellaneousProducts = ({cat, filters, sort}) => {
  const [products, setProducts]=useState([]);
  const [filteredProducts, setFilteredProducts]=useState([]);
  useEffect(() => {
    const getProducts=async ()=>{
      try
      {
        const res=await axios.get("http://localhost:5000/api/miscellaneous");
        setProducts(res.data);
      }
      catch(err)
      {
        console.log(err);
      }
    };
    getProducts();
  }, [cat])

  useEffect(() => {
    setFilteredProducts(
      products.filter((item)=>Object.entries(filters).every(([key, value])=>
        item[key].includes(value)
      ))
    )
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {filteredProducts.map((item) => (
        <MiscellaneousProduct item={item} key={item._id} />
      ))}
    </Container>
  );
};

export default MiscellaneousProducts;