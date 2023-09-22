import React from "react";
import styled from "styled-components";
import img1 from "../assets/logo1.png";

const Header = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Img src={img1} />
          <p>WHATSAPP WEB</p>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Header;

const Img = styled.img`
  width: 20%;
  margin-left: 40px;
`;

const Container = styled.div`
  width: 100%;
  height: 200px;
  background-color: #00a884;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Wrapper = styled.div`
  width: 15%;
  height: 50px;
  margin-right: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
  margin-bottom: 100px;
`;
