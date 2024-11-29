import styled from "styled-components";
import { TodoBoxPropsType } from "../type";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
  .title {
    font-size: 25px;
    font-weight: 900;
  }
  .detail {
    width: 80%;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
  }
  .delete_button {
    position: absolute;
    right: 20px;
    font-size: 30px;
  }
`;

const colorList: string[] = ["#aee2ff", "#ffb1b6", "#8de8d7", "#fffac2"];

const TodoBox = ({ todo, todos, setTodos }: TodoBoxPropsType): JSX.Element => {
  const color: string = `${colorList[Math.floor(Math.random() * 4)]}`;
  const [whatColor, setWhatColor] = useState<string>(color);

  const onClickFinish = (id:string) => {
    setTodos(
      todos.map((todo)=>(
        todo.id === id ? {...todo, isFinish: !todo.isFinish} : todo
      ))
    );
  };

  return (
    <Container
      style={{
        backgroundColor: todo.everyDayTime ? "#212121" : whatColor,
        opacity: todo.isFinish ? "0.5" : "1",
        color: todo.everyDayTime ? "#fff" : "#000",
      }}
    >
      <div className="title">{todo.title}</div>
      <div className="detail">
        <span>{todo.upodateTime}</span>
        {todo.everyDayTime ? (
          <span>매일: {todo.everyDayTime}</span>
        ) : (
          <>
            <span>시작시간: {todo.startTime}</span>
            <span>종료시간: {todo.endTime}</span>
          </>
        )}
      </div>
      <FontAwesomeIcon icon={faTrash} className="delete_button" onClick={()=>onClickFinish(todo.id)}/>
    </Container>
  );
};

export default TodoBox;
