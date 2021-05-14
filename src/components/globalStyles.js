import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body{
    background: ${({ theme }) => theme.bodyBackground};
    color: ${({ theme }) => theme.textColor};
    font-family: Cormorant, serif;
    transition: all 0.50s linear;
}
.home-container{
    background: ${({ theme }) => theme.homeBackground};
    z-index: 100;
    background-size: cover;
    background-position: center center;
    min-height: 100vh;
    width: 100%; */
}
.brand-name {
  font-size: 1.5rem;
  color: ${({ theme }) => theme.linkText};
  font-style: normal;
}
.logo,
.connect a,
a.brand-name:hover,
.croissant,
.menu-bars-icon,
.menu-bars-icon:hover {
  color: ${({ theme }) => theme.linkText};
  transition: all 0.50s linear;
}
.logo {
  font-size: 28px;
}
.btn-about {
  font-size: 22px;
  font-weight: bolder;
  color: ${({ theme }) => theme.btnText};
  border: none;
  background-color: ${({ theme }) => theme.btnBackground};
  border-radius: 0.6rem;
  padding: 8px 18px;
}
.connect a {
  font-size: 1.7rem;
  padding-top: 0;
  font-weight: bold;
}
.croissant:hover,
.greeting-language:hover,
.connect a:hover {
  color: ${({ theme }) => theme.linkHover};
  text-decoration: none;
}
`;
