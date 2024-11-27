import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import InputWrap from "./InputWrap";

const Container = styled.div`
  position: relative;
  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  .plus_button {
    position: relative;
    z-index: 1;
    background-color: #212121;
    width: 50%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 30px 20px;
    .plus {
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

const PlusButton = (): JSX.Element => {
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
            <InputWrap />
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
