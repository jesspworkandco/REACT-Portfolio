import { createGlobalstyles } from "styled-components";

export const GlobalStyles = createGlobalstyles`
body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: Cormorant", serif;
    transition: all 0.50s linear;
}`;
