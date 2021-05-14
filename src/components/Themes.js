import eiffelImg from "../../src/assets/tour-eiffel.jpeg";

export const lightTheme = {
  textColor: "navy",
  bodyBackground:
    "linear-gradient(225deg,rgba(230, 224, 224, 0.9),rgba(219, 238, 250, 0.9))",
  homeBackground: `linear-gradient(90deg,hsla(0, 0%, 99%, 0.8),rgba(240, 235, 235, 0.9)),url("${eiffelImg}")`,
  linkText: "navy",
  linkHover: "rgb(161, 5, 8)",
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
  bodyBackground:
    "linear-gradient(25deg,rgba(0, 0, 0,1),rgba(30, 30, 30, 0.9))",
  homeBackground:
    "linear-gradient(25deg,rgba(0, 0, 0,1),rgba(30, 30, 30, 0.9))",
  linkText: "white",
  linkHover: "rgb(251, 251, 89)",
  navBackground:
    "linear-gradient(rgba(142, 139, 139, 0.98),rgba(250, 250, 250, 0.95))",
  navText: "black",
  btnBackground: "darkgrey",
  btnText: "rgb(46, 46, 46)",
  cardText: "black",
  playBackground: "black",
  profilePicBorder: "2px solid black",
};
