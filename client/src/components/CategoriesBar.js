import styled from "styled-components"
import { mobile } from "../responsive";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Container=styled.div`
    height: 30px;
    width: 100%;
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Items=styled.div`
    color: white;
    display: flex;
    padding: 10px;
    font-weight: bold;
    cursor: pointer;
    ${mobile({ fontSize: "12px" })}
`
const CategoriesBar = () => {
  return (
    <Container>
      <Link to="./stationery">
        <Items>STATIONARY</Items>
      </Link>
      <Link to="./swags">
        <Items>SWAGS</Items>
      </Link>
      <Link to="./sports">
        <Items>SPORTS</Items>
      </Link>
      <Link to="./foods">
        <Items>FOOD</Items>
      </Link>
      <Link to="./miscellaneous">
        <Items>MISCELLANEOUS</Items>
      </Link>
    </Container>
  )
}

export default CategoriesBar
