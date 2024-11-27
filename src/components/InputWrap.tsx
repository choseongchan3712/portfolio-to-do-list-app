import { Box, Button, ButtonGroup, TextField } from "@mui/material";
import { useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  .form_wrap {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const StyledTextField = styled(TextField)(() => ({
  '&': {
    width:'100%',
  },
  '& .MuiInputBase-root': {
    color: '#fff', // 입력하는 글자 색상
  },
  '& .MuiInputLabel-root': {
    color: '#fff', // 라벨 색상
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#fff', // 라벨 색상
  },
  '& .MuiInput-underline': {
    width: '50%',
  },
  '& .MuiInput-underline:before': {
    borderBottomColor: '#fff', // 포커스 전 테두리 색상
  },
  '& .MuiInput-underline:hover:before': {
    borderBottomColor: '#fff !important', // hover 테두리 색상
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#aee2ff', // 포커스 후 테두리 색상
  },
}));

const OneButton = styled(Button)(()=>({
  '&.MuiButton-contained': { // variant="contained"일 때 배경 색상 변경
    backgroundColor: "#fff", // 기본 배경색을 흰색으로 지정
    color: '#000', // 텍스트 색상 검정색
  },
  '&:hover': {
    backgroundColor: "rgba(255, 255, 255, 0.5) !important"
  },
}));
const EveryButton = styled(Button)(()=>({
  '&.MuiButton-contained': {
    backgroundColor: '#fff',
    color: '#000',
  },
  '&:hover': {
    backgroundColor: "rgba(255, 255, 255, 0.5)!important"
  },
}));

const InputWrap = (): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>();
  // console.log(inputRef.current?.value);
  const [isOne, setIsOne] = useState<boolean>(true);
  const [isEvery, setIsEvery] = useState<boolean>(false);
  
const oneHandler = () => {
  setIsOne(true);
  setIsEvery(false);
};

const everyHandler = () => {
  setIsOne(false);
  setIsEvery(true);
};

  console.log(isOne);
  console.log(isEvery);

  return (
    <Container>
      <Box component="form" noValidate className="form_wrap" autoComplete="off">
        <StyledTextField
          label="내용"
          variant="standard"
          inputRef={inputRef}
          margin="normal"
        />
        <ButtonGroup variant="contained" aria-label="Basic button group" style={{marginTop: '20px'}}>
          <OneButton onClick={oneHandler} style={{backgroundColor: `${isOne ? "#aee2ff" : "#fff"}`}}>한번</OneButton>
          <EveryButton onClick={everyHandler} style={{backgroundColor: `${isEvery ? "#aee2ff" : "#fff"}`}}>매일</EveryButton>
        </ButtonGroup>
      </Box>
    </Container>
  );
};

export default InputWrap;
