import React from "react";

//This card component is used to wrap the other components it will apply the background color and the shadow to the children components
//This component is used in the HomeCards component to wrap the other components, that way we don't have to write the same code over and over again
const Card = ({ children, bg = "bg-gray-100" }) => {
  //to make properties in className dynamic use a string template literal
  return <div className={`${bg} p-6 rounded-lg shadow-md`}>{children}</div>;
};

export default Card;
