import styled from "styled-components";
import PlusButton from "../components/PlusButton";
import { useEffect, useState } from "react";
import { todosType } from "../type";
import TodoWrap from "../components/TodoWrap";

const Container = styled.div`
position: relative;
z-index: 0;
width: 100%;
height: 100vh;
background-color: #000;
padding: 50px;
display: flex;
flex-direction: column;
align-items: center;
`;

const Main = ():JSX.Element => {
  const [todos, setTodos] = useState<todosType[]>(()=>{
    const registTodo = localStorage.getItem("todos");
    return registTodo ? JSON.parse(registTodo) : []; //! 초기값 설정?
  })

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return <Container>
    <PlusButton todos={todos} setTodos={setTodos}/>
    {/* <TodoWrap /> */}
    <TodoWrap todos={todos} setTodos={setTodos}/>
  </Container>;
};

export default Main