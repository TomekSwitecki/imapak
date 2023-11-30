
import React from "react";
import HEADER_BLOCK from "../../resources/HEADER_BLOCK.png";

import Button, { ButtonShape, ButtonColor, ButtonType } from "../button/Button";
import { Container } from "../container/Container";
import PROCESS_PHOTO from "../../resources/PROCES_PHOTO.png";
import Tag from "../tag/Tag";

export function ProcessSection() {


    return (
        <Container>
            <div className="process_wrapper">

                <div className="proccess_container">
                    <div className="proccess_container--left">
                        <img src={PROCESS_PHOTO}></img>
                    </div>
                    <div className="proccess_container--right">
                        <Tag text={"Wyprzedź rynek"}></Tag>
                        <h1>Wspieramy pełen proces</h1>
                        <span className="text text--regular">
                            Modernizujemy zakłady produkcyjne, metody pakowania i
                            magazynowania na polskim rynku.

                            Dostarczamy nowoczesne maszyny wysokiej jakości do pakowania jednostkowego, zbiorczego, paletyzacji oraz owijania.
                            <br />



                        </span>
                        <br />
                        <span className="text text--light">
                            Wykwalifikowany zespół specjalistów z Polski oraz z zagranicy od wielu lat zapewnia naszym klientom profesjonalną i miłą
                            obsługę, a także doradztwo techniczne.
                        </span>
                    </div>
                </div>
            </div>
        </Container>
    );
}
