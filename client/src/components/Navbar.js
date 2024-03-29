import * as React from 'react'
import styled from 'styled-components'
import Search from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { mobile } from "../responsive";
import {useSelector} from "react-redux";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const Container = styled.div`
    height: 60px;
    ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({ padding: "10px 0px" })}
`;
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    ${mobile({ display: "none" })}
`;
const SearchBox = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;
const Input = styled.input`
    border: none;
    ${mobile({ width: "50px" })}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "24px" })}
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  font-size: 15px;
  ${mobile({ margin: "10px 0px" })}  
`;

const Option = styled.option``;

const Navbar = () => {
  const quantity=useSelector(state=>state.cart.quantity);
  const user=useSelector((state)=>state.user.currentUser);
  const logout=(state) =>{
    state.currentUse=null;
  }
    // const logout=()=>{
    //     localStorage.clear();
    // }
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                    <SearchBox>
                        <Input placeholder='Search'/>
                            <Search style={{color: "gray", fontSize: 16}}/>
                    </SearchBox>
            </Left>
            <Center><Logo>MNNIT</Logo></Center>
            <Right>
                {/* <Link to="./register">
                    <MenuItem>REGISTER</MenuItem>
                </Link> */}
                {/* <Link to="./login">
                    {user ? <MenuItem onClick={logout}>SIGNOUT</MenuItem> : <MenuItem>SIGNIN</MenuItem>}
                    {/* <MenuItem></MenuItem> */}
                {/* </Link> */} 
                    {user ? 
                        <Select onChange={logout}>
                            <Option disabled selected>
                                {user.username}
                            </Option>
                            <Option>
                                SIGNOUT
                            </Option>
                        </Select>
                    : 
                    // <Link to="./register">
                    //     <MenuItem>REGISTER</MenuItem>
                    // </Link>
                    <Link to="./login">
                        <MenuItem>SIGN IN</MenuItem>
                    </Link>
                    }
                <Link to="/cart">
                <MenuItem>
                <Badge badgeContent={quantity} color="primary">
                    <ShoppingCartOutlinedIcon/>
                </Badge>
                </MenuItem>
                </Link>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar