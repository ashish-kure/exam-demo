import React from "react";
import HomepageContainer from "../../container/Homepage/HomepageContainer";

const Homepage = () => {
  const { name } = HomepageContainer();

  return <h1 style={homeStyle}>Welcome, {name}</h1>;
};

export default Homepage;

const homeStyle = {
  marginLeft: 135,
  padding: 25,
};
