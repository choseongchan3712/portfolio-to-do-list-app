import { createTheme } from "@mui/material";

export  const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
  },
  components: {
    // TextField 안의 입력 필드 스타일
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: "#fff", // 포커스 전 테두리 색상
        },
        input: {
          color: "#fff", // 글자 색상
        },
      },
    },
    // TextField 레이블 스타일
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#fff", // 레이블 색상
        },
      },
    },
    // 플레이스홀더 색상
    MuiInputBase: {
      styleOverrides: {
        input: {
          "&::placeholder": {
            color: "#fff", // 플레이스홀더 색상
          },
        },
      },
    },
  },
});