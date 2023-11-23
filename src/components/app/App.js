import React from "react";
import { Fragment } from "react";
import { Hero } from "../hero/Hero";
import { Navbar } from "../navbar/Navbar";
import { ClientsSection } from "../client/ClientsSection";
import { ProcessSection } from "../process/ProcessSection";
export function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="app">
        <Hero />
        <ClientsSection />
        <ProcessSection />
      </div>
      {/* <Footer /> */}
    </Fragment>
  );
}
