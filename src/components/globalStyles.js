import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
    background: ${({ theme }) => theme.bodyBackground};
    color: ${({ theme }) => theme.textColor};
    font-family: Cormorant", serif;
    transition: all 0.50s linear;
}
nav .active {
    background-color: ${({ theme }) => theme.navBackground};
     color: ${({ theme }) => theme.navText};
}
a{ 
    color: ${({ theme }) => theme.linkText};
}
`;
