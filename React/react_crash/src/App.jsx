import React from "react";

const App = () => {
  //React components returns JSX and a JSX is a HTML like syntax which returns 1 parent element, insde there can be multiple child elements

  const name = "Simon";
  const age = 25;
  const isLoggedIn = true;
  const names = ["name1", "name2", "name3"];
  const styles = {
    color: "red",
    fontSize: "16px",
  };

  return (
    <>
      {" "}
      {/*JSX should reurn one parent element, that's why we have go encase multilpe components in a fragment*/}
      <div className="text-5xl">App Test</div>
      <p>
        {/* conditional in JSX*/}
        Hello {name}, your age is {age}. Is he logged in :
        {isLoggedIn ? "affermative" : "negative"}
      </p>
      <p style={styles}>
        {/* inline styling using tailwin*/}
        Hello {name}
      </p>
      <ul>
        {names.map(
          (
            index,
            name //React uses keys to identify which elements have been changes, without keys React will re-render the entire list every time.
          ) => (
            <li key={index}>{name}</li>
          )
        )}
      </ul>
    </>
  );
};

const MultipleChildren = () => {
  return (
    <>
      <h1>Multiple Children</h1>
      <h2>Hello</h2>
      <h3>World</h3>
    </>
  );
};

export default App;
