import styled from "styled-components";
import { sportsProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const SportsProducts = () => {
  return (
    <Container>
      {sportsProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default SportsProducts;