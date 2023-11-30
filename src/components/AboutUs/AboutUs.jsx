
import React, { Fragment } from "react";
import { Hero } from "../hero/Hero";
import { Navbar } from "../navbar/Navbar";
import { ClientsSection } from "../client/ClientsSection";
import { ProcessSection } from "../process/ProcessSection";
import { CardsSection } from "../CardsSection/CardsSection";
import { PartnersSection } from "../PartnersSection/PartnersSection";
import { Footer } from "../footer/Footer";
import { Contact } from "../ContactSection/Contact";
import { ToastContainer } from 'react-toastify';
import SECTION_HEADER_PHOTO from "../../resources/ABOUT_PHOTO_SECTION.png";
import PlainCard from "../PlainCard/PlainCard";
import SHAPE from "../../resources/SHAPE.png";
import SHAPE2 from "../../resources/SHAPE 2.png";
import MICHAL_PIETRASIK from "../../resources/MICHALPIETRASIK.png"
import PersonCard from "./PersonCard";
export const AboutUs = () => {
    return (
        <Fragment>
            <Navbar />
            <div className="app">
                <div className="about_us__wrapper">


                    <div className="photo_header_container">
                        <img src={SECTION_HEADER_PHOTO}></img>
                        <div className="header">
                            <div className="header__left">
                                <div className="header__title">Nasi <span className="text--highlight">eksperci.</span></div>
                                <div className="header__subtitle">Poznaj nasz zespół wykwalikowanych specjalistów.</div>
                            </div>
                            <div className="header__right">
                            </div>
                        </div>
                    </div>
                    <div className="about-us__cards">
                        <div className="about-us__header">
                            <PlainCard description={"Rodzinna firma założona w 1993 roku z biurem w Łodzi posiada w swoim zespole wyspecjalizowanych sprzedawców oraz wyszkolonych inżynierów. Nasz zespół realizuje projekty od początku po ich ukończenie. "}></PlainCard>
                            <img className="shape__decoration" src={SHAPE}></img>
                            <img className="shape__decoration" src={SHAPE2}></img>
                        </div>
                        <div className="person-cards__wrapper">
                            <PersonCard
                                name="MICHAŁ PIETRASIK"
                                email="michal.pietrasik@imapak.eu"
                                telNumber="+48 42 258 96 75"
                                mobileNumber="+48 42 258 96 75"
                                faxNumber="+48 42 258 96 75"
                                photoSrc={MICHAL_PIETRASIK}
                            />
                            <PersonCard
                                name="MICHAŁ PIETRASIK"
                                email="michal.pietrasik@imapak.eu"
                                telNumber="+48 42 258 96 75"
                                mobileNumber="+48 42 258 96 75"
                                faxNumber="+48 42 258 96 75"
                                photoSrc={MICHAL_PIETRASIK}
                            />
                            <PersonCard
                                name="MICHAŁ PIETRASIK"
                                email="michal.pietrasik@imapak.eu"
                                telNumber="+48 42 258 96 75"
                                mobileNumber="+48 42 258 96 75"
                                faxNumber="+48 42 258 96 75"
                                photoSrc={MICHAL_PIETRASIK}
                            />
                            <PersonCard
                                name="MICHAŁ PIETRASIK"
                                email="michal.pietrasik@imapak.eu"
                                telNumber="+48 42 258 96 75"
                                mobileNumber="+48 42 258 96 75"
                                faxNumber="+48 42 258 96 75"
                                photoSrc={MICHAL_PIETRASIK}
                            />
                        </div>

                    </div>
                    <Contact />
                </div>
            </div>
            <Footer />
            <ToastContainer
                bodyClassName="toastBody"
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </Fragment >
    );
};