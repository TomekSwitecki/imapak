
import React from "react";
import { Container } from "../container/Container";
import SECTION_HEADER_PHOTO from "../../resources/PARTNERS_HEADER_IMG.png";
import D400 from "../../resources/D400.jpg";
import Button, { ButtonShape, ButtonColor, ButtonType } from "../button/Button";
import PartnersCard from "./PartnersCard";
import PFM from "../../resources/PFM.png";
import BC from "../../resources/BC.png";
import ALPMA from "../../resources/ALPMA.png";
import NEXES from "../../resources/NEXES.png";
import PWR from "../../resources/PWR.png";
import TMG from "../../resources/TMG.png";
import { InfiniteLooper } from "./Looper";
export function PartnersSection() {
    const looperInstances = 6;
    return (
        <Container>
            <div id="partners_section" className="partners_wrapper">
                <div className="photo_header_container">
                    <img src={D400}></img>
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
                    <InfiniteLooper looperInstances={looperInstances}>
                        <PartnersCard linkTo={"https://www.pfm.it/en/"} imageSrc={PFM} description={"PFM jest włoską firmą z wieloletnią tradycją w zakresie linii pakujących poziomych flowpack, pionowych VFFS, lini pakujących doypack."} />
                        <PartnersCard linkTo={"https://www.bec-italy.com/en/"} imageSrc={BC} description={"B&C jest włoską firmą produkującą maszyny do pakowania produktów sypkich w duże torby."} />
                        <PartnersCard linkTo={"https://alpma.com"} imageSrc={ALPMA} description={"ALPMA-SULBANA jest niemiecką firmą dostarczającą linie do produkcji sera, maszyn do krojenia i pakowania sera."} />
                        <PartnersCard linkTo={"https://nexescontrol.com/en/home"} imageSrc={NEXES} description={"Nexes produkuje maszyny do pakowania w gotowe opakowania typu doypack, flat bottom i inne. "} />
                        <PartnersCard linkTo={"https://www.tmgimpianti.com"} imageSrc={TMG} description={"TMG jest włoskim producentem nowoczesnych linii kartonujących oraz paletyzujących. Specjalizuje się w automatyzacji końca linii pakujących."} />
                        {/* <PartnersCard empty id="empty" /> */}
                        <PartnersCard linkTo={"https://www.pwrpack.com"} imageSrc={PWR} description={"PWR DOSTARCZA zautomatyzowanych rozwiązań pakowania, które zapewniają efektywność, niezawodność i wyraźne oszczędności kosztów."} />
                    </InfiniteLooper>
                </div>
            </div>

        </Container>


    );
}
