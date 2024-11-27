import styled from "styled-components";
import PlusButton from "../components/PlusButton";

const Container = styled.div`
position: relative;
z-index: 0;
width: 100%;
height: 100vh;
background-color: #000;
padding: 50px;
`;

const Main = ():JSX.Element => {
  return <Container>
    <PlusButton />
  </Container>;
};

export default Main