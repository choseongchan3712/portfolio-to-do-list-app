import styled from "styled-components";
import { Reorder } from "framer-motion";
import TodoBox from "./TodoBox";
import { todosPropsType } from "../type";

const Container = styled.div`
  position: relative;
  z-index: 1;
  padding-top: 20px;
  width: 50%;
  .move_box {
    width: 100%;
    height: 100px;
    margin-bottom: 20px;
  }
`;

const TodoWrap = ({ todos, setTodos }: todosPropsType): JSX.Element => {
  return (
    <Container>
      <Reorder.Group
        axis="y"
        onReorder={setTodos}
        values={todos}
      >
        {todos.map((todo) => (
          <Reorder.Item key={todo.id} value={todo} className="move_box">
            <TodoBox todo={todo} setTodos={setTodos} todos={todos}/>
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </Container>
  );
};

export default TodoWrap;
