import React from "react";
import { Fragment } from "react";
import { Hero } from "../hero/Hero";
import { Navbar } from "../navbar/Navbar";
import { ClientsSection } from "../client/ClientsSection";
import { ProcessSection } from "../process/ProcessSection";
import { CardsSection } from "../CardsSection/CardsSection";
import { PartnersSection } from "../PartnersSection/PartnersSection";
import { Footer } from "../footer/Footer";
export function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="app">
        <Hero />
        <ClientsSection />
        <ProcessSection />
        <CardsSection />
        <PartnersSection />
      </div>
      <Footer />
    </Fragment >
  );
}