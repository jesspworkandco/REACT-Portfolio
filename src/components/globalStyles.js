import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
    background: ${({ theme }) => theme.bodyBackground};
    color: ${({ theme }) => theme.textColor};
    background-size: "cover";
    background-position: "center center";
    min-height: "100vh";
    width: "100%";
    margin: "0px auto";
    font-family: Cormorant", serif;
    transition: all 0.50s linear;
};
.home-container {
background: ${({ theme }) => theme.homeBackground.backgroundImage};
}
a. *{
 color: ${({ theme }) => theme.linkColor};
 background-color: ${({ theme }) => theme.linkBackground};
}
`;
