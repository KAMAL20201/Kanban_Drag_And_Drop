import React, { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import Done from "./Cards/Done";
import OnProgess from "./Cards/OnProgress";
import Todo from "./Cards/Todo";
import image from "../UI/Todo/Ellipse10.png";
import image1 from "../UI/Todo/Ellipse 12.png";
import image2 from "../UI/Todo/Ellipse 13.png";
import image3 from "../UI/Todo/Ellipse 14.png";
import image4 from "../UI/Todo/Ellipse 15.png";
import cover3 from "../UI/onProgressUI/cover3.png";
import cover1 from "../UI/onProgressUI/cover1.png";
import cover2 from "../UI/onProgressUI/cover2.png";
import coverimage from "../UI/Done/cover1.png";

const todoCards = [
  {
    id: "todo1",
    priority: "Low",
    title: "BrainStorming",
    description:
      "Brainstorming brings team members' diverse experience into play. ",
    coverimage: [],
    profileimages: [image1, image3, image4],
    comments: 12,
    files: 0,
  },

  {
    id: "todo2",
    priority: "High",
    title: "Research",
    description:
      "User research helps you to create an optimal product for users",
    coverimage: [],
    profileimages: [image2, image],
    comments: 10,
    files: 3,
  },
  {
    id: "todo3",
    priority: "High",
    title: "WireFrames",
    description:
      "Low fidelity wireframes include the most basic content and visuals.",
    coverimage: [],
    profileimages: [image1, image, image3],
    comments: 1,
    files: 2,
  },
];
const OnProgressCards = [
  {
    id: "onProg1",
    priority: "Low",
    title: "OnBoarding Illustrations",
    description: "",
    coverimage: [cover3],
    profileimages: [image4, image3, image1],
    comments: 14,
    files: 15,
  },

  {
    id: "onProg2",
    priority: "Low",
    title: "Moodboard",
    description: "",
    coverimage: [cover1, cover2],
    profileimages: [image4],
    comments: 9,
    files: 10,
  },
];
const mydoneCards = [
  {
    id: "done1",
    priority: "Completed",
    title: "Mobile App Design",
    description: "",
    coverimage: [coverimage],
    profileimages: [image, image3],
    comments: 12,
    files: 15,
  },

  {
    id: "done2",
    priority: "Completed",
    title: "Design System",
    description: "It just needs to adapt the UI from what you did before",
    coverimage: [],
    profileimages: [image1, image4, image3],
    comments: 12,
    files: 15,
  },
];
function CardContent() {
  const [toDoCards, setToDoCards] = useState(todoCards);
  const [inProgressCards, setInProgressCards] = useState(OnProgressCards);
  const [doneCards, setDoneCards] = useState(mydoneCards);

  const handleDragEnd = (result) => {
    const { source, destination, draggableId } = result;

    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      return;
    }

    const card = toDoCards.find((card) => card.id === draggableId) || 
    inProgressCards.find((card) => card.id === draggableId) || 
    doneCards.find((card) => card.id === draggableId);

    if (source.droppableId === "toDo") {
      setToDoCards(toDoCards.filter((card) => card.id !== draggableId));
    } else if (source.droppableId === "inProgress") {
      setInProgressCards(
        inProgressCards.filter((card) => card.id !== draggableId)
      );
    } else if (source.droppableId === "done" && destination.droppableId !== "toDo") {
      setDoneCards(doneCards.filter((card) => card.id !== draggableId));
    }

    if (card && destination.droppableId === "toDo") {
      if (source.droppableId !== "done") {
        setToDoCards([card, ...toDoCards]);
      }
     
    } else if (card && destination.droppableId === "inProgress") {
      setInProgressCards([card,...inProgressCards]);
    } else if (card && destination.droppableId === "done") {
      setDoneCards([card,...doneCards]);
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Container>
        <Droppable droppableId="toDo">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <Todo cards={toDoCards} />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Droppable droppableId="inProgress">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <OnProgess cards={inProgressCards} />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Droppable droppableId="done">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <Done cards={doneCards} />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </Container>
    </DragDropContext>
  );
}

export default CardContent;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: 768px) {
    display:flex;
    width:100vw;
    justify-content:space-between;
  }
  
 
`;
