
import styled from "styled-components";
import { Reorder } from "framer-motion";
import TodoBox from "./TodoBox";
import { todosPropsType, todosType } from "../type";


const Container = styled.div`
  position: relative;
  z-index: 1;
  padding-top: 20px;
  width: 50%;
`;


const TodoWrap = ({todos, setTodos}: todosPropsType): JSX.Element => {

  const handleReorder = (newOrder: string[]) => {
    // 새로운 순서대로 todos 배열을 재정렬
    const reorderedTodos: todosType[] = newOrder.map((id) => 
      todos.find(todo => todo.id === id) as todosType
    );
    setTodos(reorderedTodos);  // 새로운 배열로 todos 업데이트
  };

  return (
    <Container>
      <Reorder.Group axis="y" onReorder={handleReorder} values={todos.map((todo)=>todo.id)}>
      {todos.map((todo) => (
        <TodoBox key={todo.id} todo={todo} />
      ))}
    </Reorder.Group>
    </Container>
  );
};

export default TodoWrap;
