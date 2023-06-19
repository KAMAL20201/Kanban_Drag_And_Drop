import React from "react";
import styled from "styled-components";
import image from "../UI/category.png";
import image2 from "../UI/Vector.png";
import image3 from "../UI/vector2.png";
import image4 from "../UI/profile-2user.png";
import image5 from "../UI/setting-2.png";
import logo from "../UI/Group 7.png";
import arrow from "../UI/arrow.png";
import plus from "../UI/add.png";
import lampImage from "../UI/lamp-on.png";
import lampBg from "../UI/Ellipse 20.png";
import {AiOutlineMenu} from "react-icons/ai";
function SideBar() {
  return (
    <>
     <HamburgerMenu>
          <AiOutlineMenu />
        </HamburgerMenu>
    <Container>
      <Name>
        <Logo>
          <img src={logo} alt="" />
        </Logo>
        <NameText>Project M.</NameText>
       
        <Close>
          <img src={arrow} alt="" />
        </Close>
      </Name>
      <Tasks>
        <ul>
          <li>
            <img src={image} alt="" /> <span>Home</span>
          </li>
          <li>
            <img src={image2} alt="" /> <span>Messages</span>
          </li>
          <li>
            <img src={image3} alt="" /> <span>Tasks</span>
          </li>
          <li>
            <img src={image4} alt="" />
            <span>Members</span>
          </li>
          <li>
            <img src={image5} alt="" /> <span>Settings</span>
          </li>
        </ul>
      </Tasks>
      <MyProjects>
        <Heading>
          <span>My Projects</span>
          <img src={plus} alt="" />
        </Heading>
        <ul>
          <li style={{ color: "black", listStyle: "none" }}>
            <span
              style={{
                color: "#7AC555",
                marginRight: "0.5em",
                fontSize: "2em",
              }}
            >
              •
            </span>
            <span>Mobile App</span>
          </li>
          <li style={{ color: "black", listStyle: "none" }}>
            <span
              style={{
                color: "#FFA500",
                marginRight: "0.5em",
                fontSize: "2em",
              }}
            >
              •
            </span>
            <span>Website Redesign</span>
          </li>
          <li style={{ color: "black", listStyle: "none" }}>
            <span
              style={{
                color: "#E4CCFD",
                marginRight: "0.5em",
                fontSize: "2em",
              }}
            >
              •
            </span>
            <span>Design System</span>
          </li>
          <li style={{ color: "black", listStyle: "none" }}>
            <span
              style={{
                color: "#76A5EA",
                marginRight: "0.5em",
                fontSize: "2em",
              }}
            >
              •
            </span>
            <span>Wireframes</span>
          </li>
        </ul>
      </MyProjects>
      <Thoughts>
        <Image src={lampImage} alt="" />
        <BackgroundImg src={lampBg}></BackgroundImg>
        <ThoughtHead>Thoughts Time</ThoughtHead>
        <ThoughtDescription>
          We don’t have any notice for you, till then you can share your
          thoughts with your peers.
        </ThoughtDescription>
        <input type="text" placeholder="Write a message"></input>
      </Thoughts>
    </Container>
    </>
  );
}

export default SideBar;

const Image=styled.img`
 position:relative;
 top:-10px;

`
const BackgroundImg=styled.img`
position:relative;
top:-75px;
`
const ThoughtHead = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  padding: 10px 0px 0px 0px;
  position:relative;
  top:-90px;
`;
const ThoughtDescription = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  color: #787486;
  padding: 10px 5px;
  position:relative;
  top:-80px;
`;
const HamburgerMenu = styled.div`
  /* Styles for the hamburger menu */
  display: none;

  @media (max-width: 768px) {
    display: block;
    position:absolute;
    left:10px;
    top:30px;
    width: 40px;
    height: 40px;
   
    
  }
`;
const Heading = styled.div`
  span {
    /* position: absolute; */
    width: 87px;
    height: 15px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    /* identical to box height */
    text-transform: uppercase;
    margin: 10px 0px 20px 25px;
    color: #787486;
  }
  img {
    position: absolute;
    left: 196px;
    top: 445px;

    width: 16px;
    height: 16px;
  }
`;

const Close = styled.div`
  position: relative;
  left: 80%;
`;

const Container = styled.div`
  border-right: 1px solid #dbdbdb;
  width: 20%;
  height: 100%;
  @media (max-width: 768px) {
    /* Collapse the sidebar for mobile devices */
    width: 0px;
    display: none;
  }
`;
const NameText = styled.div`
  position: absolute;
  width: 98px;
  height: 24px;
  left: 18%;
  top: 25px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #0d062d;
`;

const Name = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dbdbdb;
  width: 100%;
  height: 80px;
  position: relative;
  top: 0;
  left: 5px;
`;
const Tasks = styled.div`
  margin-bottom: 40px;
  ul {
    list-style-type: none;
    padding-left: 20px;
    li {
      padding: 17px 0px;
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 8px;
        width: 8px;
        height: 8px;
        border-radius: 50%;

        background-color: ${({ color }) => color};
      }
    }
    span {
      position: absolute;
      width: 64px;
      height: 19px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      padding: 2px 15px 0px 15px;
      color: #787486;
    }
  }
  &:after {
    content: "";
    position: absolute;
    left: 18px;
    width: 17%;
    height: 1px;
    background-color: #dbdbdb;
  }
`;
const MyProjects = styled.div`
  ul {
    list-style-type: none;
    padding-left: 20px;
    li {
      span:nth-child(2) {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;

        color: #787486;
      }
    }
  }
`;
const Thoughts = styled.div`
  width: 90%;
  margin: 50px auto 0px auto;
  height: 200px;
  display: flex;
  background: #f5f5f5;
  border-radius: 16px;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  input {
    
    width: 166px;
    height: 40px;
    border: none;
    background: #ffffff;
    border-radius: 4px;
    position:absolute;
     bottom:45px;
    &::placeholder {
      text-align: center;
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      color: #000000;
    }
  }
`;

const Logo = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  left: 15px;
  top: 25px;
`;