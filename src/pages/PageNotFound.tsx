import styled from "styled-components";
import PageTitle from "../components/PageTitle";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
`;

const PageNotFound = () => {
  return (
    <>
      <PageTitle title="없는 페이지" />
      <Container>404!</Container>;
    </>
  );
};

export default PageNotFound;
