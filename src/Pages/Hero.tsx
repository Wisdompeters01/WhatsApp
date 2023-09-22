import React from "react";
import { styled } from "styled-components";
import img2 from "../assets/barcode.png";

const Hero = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Bod>
            <Text>
              <p>Download WhatsApp for Windows</p>
              <Yo>
                <p>
                  Get calling, screen sharing and faster experience with the new
                  Windows app.
                </p>
              </Yo>
            </Text>
            <Get>
              <p>Get the app</p>
            </Get>
          </Bod>
          <Body>
            <h2>Use WhatsApp on computer</h2>
          </Body>
          <Bar>
            <Number1>
              <p>1. Open WhatsApp on your phone</p>
              <p>
                2. Tap <b>Menu</b> or <b>Settings</b> and select{" "}
                <b>Linked Devices</b>
              </p>
              <p>
                3. Tap on <b>Link a device</b>
              </p>
              <p>4. Point your phone to this screen to capture the QR code</p>
            </Number1>
            <Barcode>
              <Img src={img2} />
            </Barcode>
          </Bar>
          <Lcd>
            <p>Link with phone number</p>
          </Lcd>
          <Down>
            <h3>Tutorial</h3>
            <p>Need help to get started?</p>
          </Down>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Hero;

const Bar = styled.div`
  display: flex;
  padding-bottom: 20px;
  border-bottom: 1px solid #d7dcdf;
  width: 100%;
  align-items: center;
  gap: 50px;
`;

const Barcode = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: start;
`;

const Img = styled.img`
  width: 50%;
`;

const Down = styled.div`
  height: 500px;
  width: 100%;
  background-color: #f9f9fa;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;

  h3 {
    font-weight: 300;
    font-size: 24px;
    margin: 0%;
  }
  p {
    color: #23927e;
  }
`;

const Lcd = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 50px;
  color: #23927e;
`;

const Number1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 30px;
  margin-left: 70px;
`;
const Body = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: row;
  h2 {
    font-weight: 300;
    margin-left: 60px;
  }
`;
const Bod = styled.div`
  width: 80%;
  height: 100px;
  border: 1px solid #d7dcdf;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
`;
const Text = styled.div`
  height: 100%;
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  p {
    font-weight: 400;
    margin: 3px;
  }
`;
const Yo = styled.div`
  p {
    font-weight: 200;
  }
`;

const Get = styled.div`
  width: 105px;
  height: 37px;
  background-color: #008069;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 35px 0;
  color: white;
`;

const Container = styled.div`
  width: 100%;
  min-height: 700px;
  background-color: #122;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 50px 0;
`;

const Wrapper = styled.div`
  min-height: 80%;
  width: 60%;
  background-color: #fff;
  position: absolute;
  bottom: 0px;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-top: 40px;
  border-radius: 3px;
  flex-direction: column;
  margin-top: px;
  top: -110px;
`;
