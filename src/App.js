import "./App.css";
import SideBar from "./components/SideBar";
import styled from "styled-components";
import MainContent from "./components/MainContent";

function App() {
  return (
    
      <Container>
        <SideBar />
        <MainContent />
      </Container>
  
  );
}

export default App;

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  background: #ffffff;
  box-shadow: 0px 44px 84px 6px #d8d9db;
  border-radius: 30px;
  margin: 0px;
  padding: 0px;
  overflow: hidden;
`;
