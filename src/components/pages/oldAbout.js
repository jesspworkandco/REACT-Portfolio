// import React from "react";
// import Container from "react-bootstrap/Container";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";

// //array of topics
// const topicsArray = [
//   "HTML",
//   "JavaScript",
//   "ReactJS",
//   "jQuery",
//   "NodeJS",
//   "MySQL",
//   "MongoDB",
//   "Bootstrap",
//   "MaterialUI",
// ];
// const topicStyle = {
//   color: "#008080",
// };
// const containerStyle = {
//   marginTop: "8em",
// };
// const bioStyle = {
//   marginTop: "1rem",
//   fontSize: "1.1rem",
//   /* line-height: 1.7rem; */
//   textAlign: "justify",
//   textJustify: "inter-word",
// };
// class About extends React.Component {
//   //state to start at index 0
//   state = { topicsIndex: 0 };
//   componentDidMount() {
//     this.timeout = setInterval(() => {
//       //current index is 0
//       let currentIdx = this.state.topicsIndex;
//       //state to go up by 1 index every 1.5 sec
//       this.setState({ topicsIndex: currentIdx + 1 });
//     }, 1200);
//   }
//   componentWillUnmount() {
//     clearInterval(this.timeout);
//   }
//   render() {
//     let changeTopics = topicsArray[this.state.topicsIndex % topicsArray.length];
//     return (
//       <>
//         <div className="aboutbody">
//           <Container className="container" style={containerStyle}>
//             <Row>
//               <Col sm={0} md={2} className="first-column text-center"></Col>
//               <Col sm={12} md={10} className="pl-sm-5">
//                 <h3>Enthusiastic Frontend Developer</h3>
//                 <p className="bio" style={bioStyle}>
//                   Recent graduate from Columbia University, aspiring Frontent
//                   Developer with a marketing background.
//                   <br />
//                   Well organized with strong managing and client facing skills.
//                   Analytical, decisive, coupled with a passion for exceeding
//                   expectations. Passion for self-teaching and learning new
//                   skills quickly.
//                   <br />
//                   During my down time, I like watching documentaries, listening
//                   to music and baking delicious Canelés from Bordeaux!
//                 </p>
//                 <h4 className="skills text-left">
//                   Technical skills:{" "}
//                   <span style={topicStyle}>{changeTopics}</span>
//                 </h4>
//               </Col>
//             </Row>
//           </Container>
//         </div>
//       </>
//     );
//   }
// }
// export default About;
