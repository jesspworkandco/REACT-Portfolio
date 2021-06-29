import eiffelImg from "../../src/assets/eiffel-tower.jpeg";

export const lightTheme = {
  textColor: "navy",
  bodyBackground: "white",
  homeBackground: `linear-gradient(90deg,rgb(255, 255, 255, 0.8),rgba(255, 255, 255)),url("${eiffelImg}")`,
  linkText: "navy",
  linkHover: "rgb(239,65,53)",
  navBackground: "navy",
  navText: "white",
  btnBackground: "navy",
  btnText: "lightgrey",
  cardText: "navy",
  playBackground: "navy",
  profilePicBorder: "2px solid white",
};

export const darkTheme = {
  textColor: "white",
  homeBackground: `linear-gradient(25deg,rgba(0, 0, 0,1),rgba(30, 30, 30, 0.9)),url("${eiffelImg}")`,
  bodyBackground:
    "linear-gradient(25deg,rgba(0, 0, 0,1),rgba(30, 30, 30, 0.9))",
  linkText: "white",
  linkHover: "rgb(161, 5, 8)",
  navBackground: "rgb(234, 234, 234)",
  navText: "black",
  btnBackground: "darkgrey",
  btnText: "rgb(46, 46, 46)",
  cardText: "black",
  playBackground: "black",
  profilePicBorder: "2px solid black",
};
