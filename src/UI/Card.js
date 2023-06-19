import React from "react";
import styled from "styled-components";
import commentimage from "./comment.png";
import filesImage from "./folder-2.png";
import { Draggable } from "react-beautiful-dnd";
function Card({ card, index }) {
  const singleImage = card.coverimage?.length === 1;
  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Container>
            <Priority priority={card.priority}>
              <Text priority={card.priority}>
                {card.priority === "Low" && "Low"}
                {card.priority === "High" && "High"}
                {card.priority === "Completed" && "Completed"}
              </Text>
              <Dots>...</Dots>
            </Priority>
            <Title>{card.title}</Title>
            {card.description !== "" && (
              <Description>{card.description}</Description>
            )}
            <CoverImages>
              {card.coverimage?.length > 0 &&
                card.coverimage.map((image, index) => {
                  return (
                    <CoverImage
                      key={index}
                      singleImage={singleImage}
                      src={image}
                      alt="myimage"
                    />
                  );
                })}
            </CoverImages>
            <Socials>
              <Images>
                {card.profileimages.map((image, index) => {
                  return (
                    <Image
                      width="24px"
                      height="24px"
                      src={image}
                      alt="myimage"
                      style={{ zIndex: card.profileimages.length - index }}
                    />
                  );
                })}
              </Images>
              <Comments>
                <img src={commentimage} alt="comment" /> {card.comments}{" "}
                <span>comments</span>
              </Comments>

              <Files>
                {" "}
                <img src={filesImage} alt="file" />
                {card.files} <span>files</span>
              </Files>
            </Socials>
          </Container>
        </div>
      )}
    </Draggable>
  );
}

export default Card;

const Dots = styled.div`
  position: relative;
  left: 190px;
  top: -5px;
  @media (max-width: 768px) {
    position: relative;
    left: 90px;
    top: -5px;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    display: none;
  }
`;

const CoverImage = styled.img`
  width: ${({ singleImage }) => (singleImage ? "100%" : "45%")};
  height: ${({ singleImage }) => (singleImage ? "110px" : "79px")};
  padding: 0px 5px 5px 5px;
  @media (max-width: 768px) {
    width: ${({ singleImage }) => (singleImage ? "100%" : "43%")};
    height: ${({ singleImage }) => (singleImage ? "90px" : "59px")};
  }
  @media (min-width: 320px) and (max-width: 480px) {
    width: ${({ singleImage }) => (singleImage ? "100%" : "33%")};
    height: ${({ singleImage }) => (singleImage ? "50px" : "30px")};
    margin: 10px 0px 0px 0px;
  }
`;
const CoverImages = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Container = styled.div`
  /* position: absolute; */
  width: 240px;
  height: auto;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 16px;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 15px;
  margin: 10px;
  @media (max-width: 768px) {
    align-items: flex-start;
    margin: 10px 5px;
    width: 145px;
    height: auto;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    align-items: flex-start;
    margin: 10px 25px;
    width: 90%;
    height: auto;
  }
`;
const Text = styled.div`
  height: 15px;
  padding: 5px 2px 5px 10px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  @media (min-width: 320px) and (max-width: 480px) {
    padding: 5px 3px 5px 4px;
  }
  color: ${(props) => {
    if (props.priority === "Low") return "#D58D49";
    if (props.priority === "High") return "#D2727D";
    if (props.priority === "Completed") return "#68B266";
    return "transparent";
  }};
`;

const Socials = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  @media (max-width: 768px) {
    padding: 20px 0px 5px 0px;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`;
const Images = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  @media (min-width: 320px) and (max-width: 480px) {
    position: relative;
    top: 0px;
  }
`;
const Image = styled.img`
  width: 24px;
  height: 24px;
  border: 1px solid #ffffff;
  border-radius: 50%;
  position: relative;

  &:not(:first-child) {
    margin-left: -8px;
    z-index: 1;
  }
`;

const Comments = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */
  @media (min-width: 320px) and (max-width: 480px) {
    display: none;
  }
  color: #787486;
  img {
    position: relative;
    left: 0px;
    top: 4px;
  }
  span {
    @media (max-width: 768px) {
      display: none;
    }
    @media (min-width: 320px) and (max-width: 480px) {
      display: none;
    }
  }
`;

const Files = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */
  color: #787486;
  @media (min-width: 320px) and (max-width: 480px) {
    display: none;
  }
  img {
    position: relative;
    left: -2px;
    top: 4px;
    @media (min-width: 320px) and (max-width: 480px) {
      position: relative;
      top: 20px;
      left: 10px;
    }
  }
  span {
    @media (max-width: 768px) {
      display: none;
    }
    @media (min-width: 320px) and (max-width: 480px) {
      display: none;
    }
  }
`;

const Priority = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 23px;
  background-color: ${(props) => {
    if (props.priority === "Low") return "rgba(223,168,116,0.2)";
    if (props.priority === "High") return "rgba(216,114,125,0.1)";
    if (props.priority === "Completed") return "rgba(131,194,157,0.2)";
    return "transparent";
  }};
  border-radius: 4px;
  margin-bottom: 10px;
`;

const Title = styled.div`
  width: 82px;
  height: 22px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #0d062d;
  margin-bottom: 10px;
  white-space: nowrap;
  @media (max-width: 768px) {
    font-size: 12px;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 8px;
    text-wrap: wrap;
  }
`;
const Description = styled.div`
  width: 90%;
  height: 30px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: left;
  color: #787486;
  margin-bottom: 10px;
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 8px;
    line-height: 10px;
  }
`;
