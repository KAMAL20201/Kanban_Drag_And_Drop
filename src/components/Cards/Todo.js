import React from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import Card from "../../UI/Card";
import image3 from "../../UI/plussquare.png";
function Todo({ cards }) {
  return (
    <Droppable droppableId="toDo">
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          <Container>
            <Heading>
              <SmallHeading>
                <Dot></Dot>
                <Text>To Do</Text>
                <Number>
                  <NumText>{cards.length}</NumText>
                </Number>
              </SmallHeading>
              <Button>
                <img src={image3} alt="" />
              </Button>
            </Heading>
            <Line></Line>

            {cards.map((card, index) => (
              <Card key={card.id} card={card} index={index} />
            ))}
          </Container>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default Todo;

const NumText = styled.div`
  position: absolute;
  width: 8px;
  height: 15px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */
  margin: 3px 6px;

  color: #625f6d;
`;
const SmallHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Line = styled.div`
  width: 254px;
  height: 0px;
  margin: 15px 15px;
  background: #800080;
  border: 3px solid #5030e5;
  @media (max-width: 768px) {
    width: 154px;
  }
  
`;

const Heading = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  justify-content: space-between;
`;
const Dot = styled.div`
  width: 8px;
  height: 8px;
  background: #5030e5;
  margin: 0px 4px;
  border-radius: 50%;

`;

const Text = styled.div`
  width: 45px;
  margin: 0px 4px;
  height: 19px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #0d062d;
  
`;
const Number = styled.div`
  box-sizing: border-box;
  margin: 0px 4px;
  width: 20px;
  height: 20px;
  background: #e0e0e0;
  border-radius: 10px;
`;
const Button = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
  
`;

const Container = styled.div`
  padding: 10px;
  margin: 20px 5px 0px 40px;
  width: 290px;
  height: 625px;
  background: #f5f5f5;
  border-radius: 16px 16px 0px 0px;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 190px;
    margin: 20px 20px 0px -210px;
  }
 
`;
