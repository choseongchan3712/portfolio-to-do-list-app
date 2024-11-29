import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import InputWrap from "./InputWrap";
import { todosPropsType} from "../type";

const Container = styled.div`
  position: relative;
  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  width: 50%;
  .plus_button {
    position: relative;
    z-index: 1;
    background-color: #212121;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 20px;
    .plus {
      cursor: pointer;
      color: #fff;
      font-size: 25px;
    }
    .close_button {
      position: absolute;
      z-index: 2;
      top: 20px;
      right: 20px;
      color: #fff;
      cursor: pointer;
      font-size: 25px;
    }
  }
  .plus_button[data-isOpen="true"] {
    /* height: 500px; */
    height: auto;
  }
`;

const PlusButton = ({todos, setTodos}: todosPropsType): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Container>
      <motion.div
        layout
        data-isOpen={isOpen}
        initial={{ borderRadius: 30 }}
        className="plus_button"
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        onClick={() => setIsOpen(true)}
      >
        {isOpen ? (
          <>
            <FontAwesomeIcon
              icon={faXmark}
              className="close_button"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
            />
            <InputWrap setIsOpen={setIsOpen} todos={todos} setTodos={setTodos}/>
          </>
        ) : (
          <FontAwesomeIcon icon={faPlus} className="plus" />
        )}
      </motion.div>
    </Container>
  );
};

export default PlusButton;

//! e.stopPropagation() -> 버블링 방지
