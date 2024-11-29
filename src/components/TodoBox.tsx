import styled from "styled-components";
import { useMotionValue, Reorder } from "framer-motion";

const Container = styled.div`
.todo_box {
  color: #fff;
}
`;


const TodoBox = ({ todo }: any): JSX.Element => {
  return (
    <Container>
      <Reorder.Item value={todo.id} className="todo_box"> {/* `id`만 value로 전달 */}
        <div>
          <h3>{todo.title}</h3>
          <p>업데이트 시간: {todo.upodateTime}</p>
          {todo.startTime && <p>시작 시간: {todo.startTime}</p>}
          {todo.endTime && <p>종료 시간: {todo.endTime}</p>}
          <p>{todo.isFinish ? "완료됨" : "진행 중"}</p>
        </div>
      </Reorder.Item>
    </Container>
  );
};

export default TodoBox;
