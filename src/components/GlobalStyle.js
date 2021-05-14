import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body{
    background: ${({ theme }) => theme.bodyBackground};
    color: ${({ theme }) => theme.textColor};
    font-family: Cormorant, serif;
    transition: all 0.20s linear;
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
.menu-bars-icon:hover,
.github-link,
.cobalt {
  color: ${({ theme }) => theme.linkText};
}
.logo {
  font-size: 28px;
}
.btn-about{
  color: ${({ theme }) => theme.btnText};
  background-color: ${({ theme }) => theme.btnBackground};
}
.github-link:hover,
.croissant:hover,
.greeting-language:hover,
.connect a:hover,
.nav-text a:hover,
#email:hover,
.play:hover,
.cobalt:hover {
  color: ${({ theme }) => theme.linkHover};
  text-decoration: none;
}
.menu-close,
.nav-menu.active ,
.nav-text a,
#email  {
  color: ${({ theme }) => theme.navText};
}
.nav-menu.active {
    background: ${({ theme }) => theme.navBackground};
}
.project-description,
.card-title{
    color: ${({ theme }) => theme.cardText}
}
.play {
  background-color: ${({ theme }) => theme.playBackground};
}
.profile-pic {
    border: ${({ theme }) => theme.profilePicBorder}
}
`;
