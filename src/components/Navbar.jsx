import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: Space-between;
  position: relative;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  right: 0;
  left: 0;
  position: absolute;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Language = styled.span`
  margin: 5px;
  font-size: 14px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
  margin-left: 25px;
  padding: 3px;
  height: 30%;
`;
const Input = styled.input`
  border: none;
  height: 100%;
  cursor: pointer;
`;
const Logo = styled.div`
  font-weight: bold;
`;
const MenuItem = styled.div`
  font-size: 19px;
  cursor: pointer;
  margin-left: 25px;
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: 'gray', fontSize: '16px' }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>P G.</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
