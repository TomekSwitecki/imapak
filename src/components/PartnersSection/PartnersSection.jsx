
import React from "react";
import { Container } from "../container/Container";
import SECTION_HEADER_PHOTO from "../../resources/PARTNERS_HEADER_IMG.png";
import Button, { ButtonShape, ButtonColor, ButtonType } from "../button/Button";
import PartnersCard from "./PartnersCard";
import PFM from "../../resources/PFM.png";
import BC from "../../resources/BC.png";
import ALPMA from "../../resources/ALPMA.png";
import NEXES from "../../resources/NEXES.png";
import PWR from "../../resources/PWR.png";
import TGM from "../../resources/TGM.png";
export function PartnersSection() {

    return (
        <Container>
            <div id="partners_section" className="partners_wrapper">
                <div className="photo_header_container">
                    <img src={SECTION_HEADER_PHOTO}></img>
                    <div className="header">
                        <div className="header__left">
                            <div className="header__title">Nasi <span className="text--highlight">partnerzy.</span></div>
                            <div className="header__subtitle">Imapak od lat współpracuje z renomowanymi europejskimi producentami maszyn</div>

                        </div>
                        <div className="header__right">
                        </div>
                    </div>
                </div>
                <div className="partners-cards_wrapper">
                    <PartnersCard linkTo={"https://www.pfm.it/en/"} imageSrc={PFM} description={"PFM jest włoską firmą z wieloletnią tradycją w zakresie linii pakujących poziomych oraz pionowych."} />
                    <PartnersCard linkTo={"https://www.bec-italy.com/en/"} imageSrc={BC} description={"B&C jest włoską firmą produkującą maszyny do pakowania produktów sypkich w duże torby."} />
                    <PartnersCard linkTo={"https://alpma.com/products/packaging-technology/handling-systems/"} imageSrc={ALPMA} description={"ALPMA-SULBANA jest niemiecką firmą dostarczającą linie do produkcji sera, maszyn do krojenia i pakowania sera."} />
                    <PartnersCard linkTo={"https://nexescontrol.com/en/home"} imageSrc={NEXES} description={"Nexes tworzy opatentowane rozwiązania do pakowania obejmujące wszystkie dziedziny i skupiają się na zrównoważonym podejściu. "} />
                    <PartnersCard linkTo={"https://tgm.it"} imageSrc={TGM} description={"TGM od ponad 40 lat zaspokaja różnorodne potrzeby przemysłów kosmetycznego, farmaceutycznego, chemicznego i spożywczego. "} />
                    {/* <PartnersCard empty id="empty" /> */}
                    <PartnersCard linkTo={"https://www.pwrpack.com"} imageSrc={PWR} description={"PWR DOSTARCZA zautomatyzowanych rozwiązań pakowania, które zapewniają efektywność, niezawodność i wyraźne oszczędności kosztów."} />

                </div>
            </div>

        </Container>


    );
}
