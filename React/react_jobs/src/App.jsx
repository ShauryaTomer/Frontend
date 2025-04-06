import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobListings from "./components/JobListings";
import ViewAllJobs from "./components/ViewAllJobs";

const App = () => {
  return (
    <>
      {/*Import and using Navbar*/}
      <Navbar />
      {/* <!-- Hero Component--> */}
      <Hero />
      {/* <!-- Developers and Employers --> */}
      <HomeCards />
      {/* <!-- Browse Jobs --> */}
      <JobListings />
      <ViewAllJobs />
    </>
  );
};

export default App;
