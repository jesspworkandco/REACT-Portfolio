import eiffelImg from "../../src/assets/tour-eiffel.jpeg";

export const lightTheme = {
  textColor: "navy",
  linkColor: "white",
  linkBackground: "navy",
  bodyBackground:
    "linear-gradient(225deg,rgba(230, 224, 224, 0.9),rgba(219, 238, 250, 0.9))",
  homeBackground: `linear-gradient(90deg,hsla(0, 0%, 99%, 0.8),rgba(240, 235, 235, 0.9)),url("${eiffelImg}")`,
  buttonText: "lightgray",
  buttonBackground: "navy",
  sideBarBackground: "white",
  sideBarText: "black",
  linkText: "navy",
  linkHover: "rgb(161, 5, 8)",
  navBackground: "navy",
  navText: "white",
  btnBackground: "navy",
  btnText: "lightgrey",
};

export const darkTheme = {
  textColor: "white",
  linkColor: "black",
  linkBackground: "white",
  bodyBackground:
    "linear-gradient(25deg,rgba(0, 0, 0,1),rgba(30, 30, 30, 0.9))",
  homeBackground:
    "linear-gradient(25deg,rgba(0, 0, 0,1),rgba(30, 30, 30, 0.9))",
  buttonText: "black",
  buttonBackground: "lightgray",
  sideBarBackground: "white",
  sideBarText: "black",
  linkText: "white",
  linkHover: "rgb(251, 251, 89)",
  navBackground: "white",
  navText: "black",
  btnBackground: "darkgrey",
  btnText: "rgb(46, 46, 46)",
};
