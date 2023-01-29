import React from 'react'
import styled from "styled-components"
import { Search, ShoppingCartOutlined } from "@mui/icons-material"
import { Badge } from "@mui/material"
import { mobile } from "../responsive"
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux"
import g from "../assets/logo.png"

const Container = styled.div`
  height: 90px;
  background-color: beige;
  display: block;
  position: fixed;
  top: 10; 
   z-index: 9999; 
   width: 100%; 
   /* height: 50px; */
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 18px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 10px;
  border-radius: 50px;
`;

const Input = styled.input`
  border: none;
  width: 250px;
  height: 20px;
  font-size: 20px;
  background-color: beige;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

// const Logo = styled.h1`
//   font-weight: bold;
//   ${mobile({ fontSize: "24px" })}
// `;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 17px;
  margin-left: 25px;
  text-decoration: none;
  color: black;
  cursor: pointer;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
const Logomain = styled.img`
  width: 10vw;
  border-radius: 60%;
  ${mobile({ width: "90px" })}
`
const Navbar = () => {
  const quantity = useSelector(state => state.cart.quantity)
  // console.log(quantity)
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/">
            <Logomain className='logo' src={g} alt="" />
            {/* <Logo>JD's store.</Logo> */}
          </Link>
        </Center>
        <Right>
          <Link to="/register">
            <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link to="/login">
            <MenuItem>SIGN IN</MenuItem>
          </Link>
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <Link to="/cart">

                <ShoppingCartOutlined />
              </Link>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;