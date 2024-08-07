
import React from "react";

import PlainCard from "../PlainCard/PlainCard";
import ICON_DOLLAR from "../../resources/ICON_DOLLAR.png";
import ICON_SHIELD from "../../resources/ICON_SHIELD.png";
import { Container } from "../container/Container";
import ListItem from "../ListItem/ListItem";
import MACHINE_1 from "../../resources/MACHINE_1.png";
import CHEESE from "../../resources/CHEESE.png";
import WORKER from "../../resources/WORKER_.png"
import { useNavigate } from "react-router-dom";
export function CardsSection() {

    const navigate = useNavigate();
    const categories1 = [
        "Maszyny pakujące - flowpack, doypack, pionowe VFFS",
        "Wagi wielogłowicowe",
        "Kartoniarki",
        "Paletyzatory",
    ];

    const list1 = categories1.map((category, index) => (
        <ListItem key={index} label={category} />
    ));

    const categories2 = [
        "Linia do produkcji twardego sera",
        "linie do produkcji MOZZARELLI I KASHKVAL",
        "Krojenie i wiórkowanie sera",
        "Pakowanie różnych rodzajów serów"
    ];
    const handleCardClick = () => {
        navigate("/about-us");
    };

    const list2 = categories2.map((category, index) => (
        <ListItem key={index} label={category} />
    ));

    return (
        <Container>
            <div id="about_section" className="cards_wrapper">
                <PlainCard title={"NOWOCZESNE, WYDAJNE METODY PAKOWANIA, KARTONOWANIA I PALETYZACJI, KTÓRE POZWALAJĄ NASZYM KLIENTOM WYPRZEDZAĆ RYNEK"}></PlainCard>
                {/* <PlainCard imageSrc={ICON_DOLLAR} description={"Doradzamy oraz pomagamy w uzyskaniu środków finansowych pochodzących z dotacji z Unii  Europejskiej jak również z kredytów bankowych."}></PlainCard> */}
                <PlainCard id="empty-card" empty ></PlainCard>
                <PlainCard imageSrc={ICON_SHIELD} description={"Oferujemy pełne wsparcie techniczne związane  z uruchomieniem maszyn, szkoleniem pracowników, serwisem gwarancyjnym oraz pogwarancyjnym."}></PlainCard>
                <PlainCard imageSrc={MACHINE_1} type={"modern"} TagText={"Maszyny pakujące"} title={"Maszyny pakujące"}></PlainCard>
                <PlainCard imageSrc={CHEESE} type={"modern"} TagText={"Mleczarstwo"} title={"Przemysł mleczarski"}></PlainCard>
                <PlainCard id={"link"} imageSrc={WORKER} type={"modern"} TagText={"Nasz zespół"} title={"Poznaj naszych fachowców"} onClick={handleCardClick}></PlainCard>
                <PlainCard>
                    <div className="list_wrapper">
                        <h3>Nasza oferta</h3>
                        {list1}
                    </div>
                </PlainCard>
                <PlainCard id={"long_list"}>
                    <div className="list_wrapper">
                        {list2}
                    </div>
                </PlainCard>
                <PlainCard description={"Dbamy o Klienta od instalacji, aż po serwis pogwarancyjny. Nasi wyszkoleni inżynierowie są do dyspozycji Klienta, aby wspomóc telefonicznie lub na miejscu w zakładzie. Jesteśmy autoryzowanym serwisem firm z którymi współpracujemy."}></PlainCard>
            </div>
        </Container>


    );
}
