import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  background-color: #fff;
  border-bottom: 1px solid #e0e0e0;
  padding: 10px 20px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
const ImgLink = styled.div`
 height: 15px;
 width: 10px;
 margin-top: -50px;
 margin-right: 30px;
`;

const NavLink = styled(Link)`
  color: #000;
  text-decoration: none;
  padding: 10px;
  &:hover {
    text-decoration: underline;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const DonateButton = styled.button`
  background-color: #e53935;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
`;
const CSRButton = styled.button`
  background-color: white;
  color: red;
  border: 1px solid red;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
`;


const Header = () => (
  <HeaderWrapper>
    <Nav>
      <ImgLink to="/">
        <img src="ncclogo.png"></img>
      </ImgLink>
      <NavLinks>
        <NavLink to="/">The School</NavLink>
        <NavLink to="/">Academics</NavLink>
        <NavLink to="/">Life @ DBITR</NavLink>
        <NavLink to="/">Contact us</NavLink>
      </NavLinks>
      <ButtonContainer>
        <CSRButton to="/">CSR</CSRButton>
        <DonateButton>Donate ❤</DonateButton>
      </ButtonContainer>
    </Nav>
  </HeaderWrapper>
);

export default Header;
