import React from "react";
import styled from "styled-components";
import image from "../UI/searchbtn.png";
import image2 from "../UI/calendar-2.png";
import image3 from "../UI/message.png";
import image4 from "../UI/notification.png";
import image5 from "../UI/profile_pic.png";
import image6 from "../UI/arrow2.png";
function Header() {
  return (
    <Container>
      <Input>
        <img src={image} alt="" />
        <input type="text" placeholder="Search for anything..." />
      </Input>
      <Button>
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </Button>
      <Name>
        <span>Anima Agrawal</span>
        <br />
        <span>U.P, India</span>
      </Name>
      <ProfilePic>
       <img src={image5} alt="" />
      </ProfilePic>
      <Arrow>
        <img src={image6} alt="" />
      </Arrow>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  height: 80px;
  width: 1000px;
  border-bottom: 1px solid #dbdbdb;
  display: flex;
  flex-direction: row;
  
`;
const Button = styled.div`
  position: relative;
  top:25px;
  left:55%;
  img {
    padding: 0px 10px;
  }
  @media (max-width: 768px) {
    /* Collapse the buttons for mobile devices */
    width: 0px;
    display: none;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    /* Styles for screens with width between 320px and 480px */
    /* Targeting iPhones and similar devices */
    width: 0px;
    display: none;

  }
`;
const Name = styled.div`
position: relative;
top:25px;
left:58%; 
  span:first-child{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: right;
    color: #0D062D;
  }
  &:nth-child(3){
    padding:1px 0px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: right;
    color: #787486;

  }
  @media (max-width: 768px) {
    /* Collapse the buttons for mobile devices */
    top:25px;
    left:50%; 
  }
`;
const ProfilePic = styled.div`
position:absolute;
right:40px;
top:25px;
img{
border-radius:50%;
}
`;
const Arrow = styled.div`
position:absolute;
top:25px;
right:10px;
`;

const Input = styled.div`
  position:absolute;
  display: flex;
  padding: 10px 40px;
  top:10px;
  input {
    width: 417px;
    height: 44px;
    box-sizing: border-box;
    position: absolute;
    background: #f5f5f5;
    border-radius: 6px;
    border: none;
    padding-left: 40px;
    @media (min-width: 320px) and (max-width: 480px) {
    /* Styles for screens with width between 320px and 480px */
    /* Targeting iPhones and similar devices */
    width: 217px;
  }
  }
  input::placeholder{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #787486;
    
  }
  img {
    position: absolute;
    left: 57%;
    right: 12.5%;
    top: 101.1%;
    bottom: 12.5%;
    z-index: 9999;

  }
  
`;
