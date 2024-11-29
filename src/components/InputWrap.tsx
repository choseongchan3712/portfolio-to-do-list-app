import { Alert, Box, Button, ButtonGroup, TextField } from "@mui/material";
import { useRef, useState } from "react";
import styled from "styled-components";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DateTimeRangePicker } from "@mui/x-date-pickers-pro/DateTimeRangePicker";
import { TimePicker } from "@mui/x-date-pickers";
import { useForm } from "react-hook-form";
import { inputWrapPropsType, OnSubmitType } from "../type";
import { Dayjs } from "dayjs";
import { day, month, year } from "./date";

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
  "&": {
    width: "100%",
  },
  "& .MuiInputBase-root": {
    color: "#fff", // 입력하는 글자 색상
  },
  "& .MuiInputLabel-root": {
    color: "#fff", // 라벨 색상
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#fff", // 라벨 색상
  },
  "& .MuiInput-underline": {
    width: "50%",
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: "#fff", // 포커스 전 테두리 색상
  },
  "& .MuiInput-underline:hover:before": {
    borderBottomColor: "#fff !important", // hover 테두리 색상
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#aee2ff", // 포커스 후 테두리 색상
  },
}));

const OneButton = styled(Button)(() => ({
  "&.MuiButton-contained": {
    // variant="contained"일 때 배경 색상 변경
    backgroundColor: "#fff", // 기본 배경색을 흰색으로 지정
    color: "#000", // 텍스트 색상 검정색
  },
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.5) !important",
  },
}));
const EveryButton = styled(Button)(() => ({
  "&.MuiButton-contained": {
    backgroundColor: "#fff",
    color: "#000",
  },
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.5)!important",
  },
}));

const StyledDateTimeRangePicker = styled(DateTimeRangePicker)(() => ({
  "& .MuiOutlinedInput-root": {
    marginBottom: "20px",
    "&:hover .MuiOutlinedInput-notchedOutline": {
      border: "2px solid #fff", // 호버 시 테두리 색상
    },
  },
  "& .MuiOutlinedInput-root.Mui-disabled": {
    ".MuiOutlinedInput-notchedOutline": {
      border: "1px solid rgba(255, 255, 255, 0.5) !important", // 테두리 색상
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      border: "2px solid rgba(255, 255, 255, 0.5) !important", // 호버 시 테두리 색상
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#fff",
  },
  "& .MuiInputLabel-root": {
    color: "#fff",
  },
  "& .MuiInputLabel-root.Mui-disabled": {
    color: "rgba(255, 255, 255, 0.5) !important",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#fff",
  },
  "& .MuiInputBase-input": {
    color: "#fff", // 입력하는 글자 색상
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#aee2ff", // 포커스된 상태 테두리 색상
  },
  "& .MuiTypography-root": {
    color: "#fff", // 중간 선의 색상
    marginBottom: "20px",
  },
}));

const StyledTimePicker = styled(TimePicker)(() => ({
  "& .MuiInputBase-root": {
    marginBottom: "20px",
    "&:hover .MuiOutlinedInput-notchedOutline": {
      border: "2px solid #fff",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#aee2ff",
    },
    "&.Mui-focused .MuiInputLabel-root": {
      color: "#fff",
    },
  },
  "& .MuiInputBase-root.Mui-disabled": {
    "& .MuiOutlinedInput-notchedOutline": {
      border: "1px solid rgba(255, 255, 255, 0.5) !important",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      border: "2px solid rgba(255, 255, 255, 0.5) !important",
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#fff",
  },

  "& .MuiInputLabel-root": {
    color: "#fff",
  },
  "& .MuiInputLabel-root.Mui-disabled": {
    color: "rgba(255, 255, 255, 0.5) !important",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#fff",
  },
  "& .MuiIconButton-root": {
    color: "#fff",
  },
  "& .MuiIconButton-root.Mui-disabled": {
    color: "rgba(255, 255, 255, 0.5) !important",
  },
  "& .MuiOutlinedInput-input": {
    color: "#fff",
  },
}));

const SubmitButton = styled(Button)(() => ({
  "&.MuiButton-contained": {
    width: "100%",
    backgroundColor: "#fff",
    color: "#000",
  },
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.5)!important",
  },
}));

const InputWrap = ({ setIsOpen, todos, setTodos }: inputWrapPropsType): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>();
  // console.log(inputRef.current?.value);
  const [isOne, setIsOne] = useState<boolean>(true);
  const [isEvery, setIsEvery] = useState<boolean>(false);

  const oneHandler = () => {
    setIsOne(true);
    setIsEvery(false);
    setValue("isOneCheck", true); //!
    setValue("isEveryCheck", false);
  };

  const everyHandler = () => {
    setIsOne(false);
    setIsEvery(true);
    setValue("isOneCheck", false);
    setValue("isEveryCheck", true);
  };

  const everyDayHandler = (e: Dayjs | null) => {
    setValue("everyDayTime", e?.format("YYYY-MM-DD HH:mm"));
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<OnSubmitType>({
    defaultValues: {
      startTime: "",
      endTime: "",
    },
  }); //!

  const onSubmit = (data: OnSubmitType) => {
    setTodos([
      ...todos,
      {
        id: `${new Date()}${data.detail}`,
        title: `${data.detail}`,
        upodateTime:`등록시간: ${year}년 ${month}월 ${day}일`,
        isFinish: false,
        startTime: isOne ? `${data.startTime}` : undefined,
        endTime: isOne ? `${data.endTime}` : undefined,
        everyDayTime: isEvery ? `${data.everyDayTime}` : undefined,
      }
    ]);
    setIsOpen(false);
    reset();
  };

  return (
    <Container>
      <Box
        component="form"
        noValidate
        className="form_wrap"
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <StyledTextField
          label="내용"
          variant="standard"
          inputRef={inputRef}
          margin="normal"
          {...register("detail", { required: "내용은 필수입니다." })}
        />
        {errors.detail && (
          <Alert
            variant="outlined"
            severity="error"
            style={{ color: "red", marginBottom: "10px" }}
          >
            {errors.detail.message}
          </Alert>
        )}
        <ButtonGroup
          variant="contained"
          aria-label="Basic button group"
          style={{ marginTop: "20px", marginBottom: "20px" }}
        >
          <OneButton
            onClick={oneHandler}
            style={{ backgroundColor: `${isOne ? "#aee2ff" : "#fff"}` }}
            {...register("isOneCheck")}
          >
            한번
          </OneButton>
          <EveryButton
            onClick={everyHandler}
            style={{ backgroundColor: `${isEvery ? "#aee2ff" : "#fff"}` }}
            {...register("isEveryCheck")}
          >
            매일
          </EveryButton>
        </ButtonGroup>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DateTimeRangePicker"]}>
            <StyledDateTimeRangePicker
              localeText={{ start: "시작시간", end: "끝나는시간" }}
              disabled={isOne ? false : true}
              onChange={(newValue) => {
                setValue("startTime", newValue[0]?.format("YYYY-MM-DD HH:mm"));
                setValue("endTime", newValue[1]?.format("YYYY-MM-DD HH:mm"));
              }}
            />
            <input
              {...register("startTime", {
                required: isOne ? "시작시간을 입력하세요" : false,
              })}
              type="hidden"
            />
            <input
              {...register("endTime", {
                required: isOne ? "종료시간을 입력하세요" : false,
              })}
              type="hidden"
            />
          </DemoContainer>
          {errors.startTime && (
            <Alert
              variant="outlined"
              severity="error"
              style={{ color: "red", marginBottom: "10px" }}
            >
              {errors.startTime.message}
            </Alert>
          )}
          {errors.endTime && (
            <Alert
              variant="outlined"
              severity="error"
              style={{ color: "red", marginBottom: "10px" }}
            >
              {errors.endTime.message}
            </Alert>
          )}
          <DemoContainer components={["TimePicker"]}>
            <StyledTimePicker
              label="시간을 입력하세요"
              disabled={isEvery ? false : true}
              onChange={everyDayHandler}
            />
            <input
              {...register("everyDayTime", {
                required: isEvery ? "시간을 입력하세요" : false,
              })}
              type="hidden"
            />
          </DemoContainer>
          {errors.everyDayTime && (
            <Alert
              variant="outlined"
              severity="error"
              style={{ color: "red", marginBottom: "10px" }}
            >
              {errors.everyDayTime.message}
            </Alert>
          )}
        </LocalizationProvider>
        <SubmitButton variant="contained" type="submit">
          추가하기
        </SubmitButton>
      </Box>
    </Container>
  );
};

export default InputWrap;
