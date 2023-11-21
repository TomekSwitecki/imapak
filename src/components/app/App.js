import React from "react";
import { Fragment } from "react";
import { Hero } from "../hero/Hero";
import { Navbar } from "../navbar/Navbar";
export function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="app">
        <Hero />
      </div>
      {/* <Footer /> */}
    </Fragment>
  );
}
