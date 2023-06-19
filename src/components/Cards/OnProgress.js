import React from "react";
import styled from "styled-components";
import Card from "../../UI/Card";
import { Droppable } from 'react-beautiful-dnd';

function OnProgess({ cards }) {
  return (
    <Droppable droppableId="inProgress">
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          <Container>
            <Heading>
              <SmallHeading>
                <Dot></Dot>
                <Text>On Progress</Text>
                <Number>
                  <NumText>3</NumText>
                </Number>
              </SmallHeading>
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

export default OnProgess;

const NumText = styled.div`
  position: absolute;
  width: 8px;
  height: 15px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  margin: 3px 6px;
  color: #625f6d;
`;

const SmallHeading = styled.div`
  display: flex;
  align-items: center;
`;
const Line = styled.div`
  width: 254px;
  height: 0px;
  margin: 0px 15px;
  background: #800080;
  border: 3px solid #FFA500;
  @media (max-width: 768px) {
    width:154px;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    width: 74px;
  
  }
`;

const Heading = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  margin-bottom:5px;
`;
const Dot = styled.div`
  width: 10px;
  height: 8px;
  background: #FFA500;
  margin: 0px 4px;
  border-radius: 50%;
  @media (min-width: 320px) and (max-width: 480px) {
   display:none;
  }
`;

const Text = styled.div`
  width: 100%;
  margin: 0px 4px;
  height: 19px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #0d062d;
  @media (min-width: 320px) and (max-width: 480px) {
    font-size:10px;
  }
`;
const Number = styled.div`
  box-sizing: border-box;
  margin: 0px 3px;
  width: 30px;
  height: 20px;

  background: #e0e0e0;
  border-radius: 10px;
`;

const Container = styled.div`
  padding: 10px;
  margin: 20px 5px;
  width: 290px;
  height: 625px;
  background: #f5f5f5;
  border-radius: 16px 16px 0px 0px;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 190px;
    margin: 20px 20px 0px 0px;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    width: 100px;
    margin: 20px 5px 0px 0px;
  }
`;