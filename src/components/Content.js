import React from "react";
import styled from "styled-components";
import image1 from "../UI/arrow-square-up.png";
import image2 from "../UI/link.png";
import image3 from "../UI/plussquare.png";
import image4 from "../UI/invite/Ellipse 12.png";
import image5 from "../UI/invite/Ellipse 13.png";
import image6 from "../UI/invite/Ellipse 14.png";
import image7 from "../UI/invite/Ellipse 15.png";
import image8 from "../UI/invite/Ellipse 17.png";
import image9 from "../UI/invite/Group 647.png";
import image10 from "../UI/profile-2user.png";
import image11 from "../UI/menu.png";
import image12 from "../UI/Group 612.png";
function Content() {
  return (
    <Container>
      <Definition>
        <Heading>
          <span>Mobile App</span>
          <img src={image1} alt="" />
          <img
            style={{
              background: "rgba(80, 48, 229, 0.2)",
              padding: "5px",
              width: "15px",
              height: "15px",
            }}
            src={image2}
            alt=""
          />
        </Heading>

        <Invite>
          <img src={image3} alt="" />
          <span>Invite</span>
          <img src={image4} alt="" />
          <img src={image5} alt="" />
          <img src={image6} alt="" />
          <img src={image7} alt="" />
          <img src={image8} alt="" />
          <p>+2</p>
        </Invite>
      </Definition>
      <Filter>
        <Dropdown>
          <img src={image9} alt="" />
        </Dropdown>

        <Share>
          <Button>
            <Logo src={image10} alt="Logo" />
            Share
          </Button>
          <Line />
          <img src={image12} alt="" />
          <img src={image11} alt="" />
        </Share>
      </Filter>
    </Container>
  );
}

export default Content;

const Dropdown = styled.div`
  img {
    margin-left: 40px;
  }
`;

const Line = styled.div`
  margin: 0px 10px;
  width: 0px;
  height: 28px;
  border: 1px solid #787486;
`;
const Share = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 60px;
  img {
    margin: 0px 10px;
  }
  @media (max-width: 768px) {
    position: relative;
    top: 0px;
    right: 200px;
  }
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border: 1px solid black;
  border-radius: 4px;
  background-color: transparent;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  font-family: "Inter";
  margin-right: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-transform: capitalize;

  color: #787486;
`;

const Logo = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;
const Container = styled.div``;

const Definition = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0px 50px 40px;
  @media (min-width: 320px) and (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`;

const Filter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Invite = styled.div`
  height: 3em;
  width: 30%;
  @media (max-width: 768px) {
    position: relative;
    top: 0px;
    right: 20px;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    position: relative;
    top: 40px;
    right: 130px;
    margin-bottom: 20px;
  }
  span {
    position: relative;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-transform: capitalize;
    color: #5030e5;
    margin: 0px 30px 10px 10px;
    top: -10px;
    left: 2px;
    @media (max-width: 768px) {
      /* Collapse the buttons for mobile devices */
      top: -10px;
      left: -210px;
    }
  }
  img {
    &:first-child {
      position: relative;
      top: -6px;
      left: 0px;
      @media (max-width: 768px) {
        /* Collapse the buttons for mobile devices */
        position: relative;
        top: -6px;
        left: -220px;
      }
    }
    margin-top: 10px;
    margin-left: 10px;
    @media (max-width: 768px) {
      /* Collapse the buttons for mobile devices */
      position: relative;
      top: 0px;
      left: -220px;
    }
    &:not(:first-child) {
      margin-left: -8px;
      z-index: 1;
    }
  }

  p {
    /* Styles for the last span */
    display: block;
    position: relative;
    top: -50px;
    right: -228px;
    @media (max-width: 768px) {
      display: block;
      position: relative;
      top: -50px;
      right: -8px;
      z-index: 999;
    }
  }
`;
const Heading = styled.div`
  span {
    position: absolute;
    width: 253px;
    height: 56px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 46px;
    line-height: 56px;
    text-transform: capitalize;
    color: #0d062d;
    @media (max-width: 768px) {
      /* Collapse the buttons for mobile devices */
      width: 253px;
      height: 56px;
      font-size: 35px;
    }

  }
  img:nth-child(2) {
    position: relative;
    left: 270px;
    top: 15px;
    @media (max-width: 768px) {
      /* Collapse the buttons for mobile devices */
      left: 210px;
      top: 15px;
    }
  }
  img:nth-child(3) {
    position: relative;
    left: 280px;
    top: 13px;
    border-radius: 30%;
    @media (max-width: 768px) {
      /* Collapse the buttons for mobile devices */
      left: 220px;
      top: 13px;
    }
  }
    @media (min-width: 320px) and (max-width: 480px) {
     
      position:absolute;
      top:85px;
      left:40px;
      margin-bottom: 20px; 
     }  
`;
