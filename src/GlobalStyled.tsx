import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyled = createGlobalStyle`
${reset}

*{
  box-sizing: border-box;
}

img{
  width: 100%;
  display: block;
}

a{
  text-decoration: none;
}
`;