
import React from "react";
import HEADER_BLOCK from "../../resources/HEADER_BLOCK.png";

import Button, { ButtonShape, ButtonColor, ButtonType } from "../button/Button";
import { Container } from "../container/Container";
import { ClientCard } from "./ClientCard";

import BAKALLAND from "./clients_logos/BAKALLAND.png";
import MLEKOVITA from "./clients_logos/MLEKOVITA.png";
import LOWICZ from "./clients_logos/ŁOWICZ.png";
import POLMLEK from "./clients_logos/POLMLEK.png";
import MLEKPOL from "./clients_logos/MLEKPOL.png";

export function ClientsSection() {


    return (
        <Container>
            <div className="clients_wrapper">
                <div className="header">
                    <div className="header__left">
                        <div className="header__title">Możesz nam <span className="text--highlight">zaufać.</span></div>
                        <div className="header__subtitle">Zaufali nam już m.in.:</div>
                    </div>
                    <div className="header__middle">
                        <img src={HEADER_BLOCK}></img>
                    </div>
                    <div className="header__right">
                        <Button
                            type={ButtonType.Filled}
                            color={ButtonColor.Default}
                            append={<box-icon name='right-arrow-alt' ></box-icon>}
                            text={"Dowiedz się więcej!"}
                            onClick={() => handleScrollToId("kontakt")}
                        />
                    </div>

                </div>

                <div className="clients_wrapper__logotypes">
                    <ClientCard logo={MLEKPOL}></ClientCard>
                    <ClientCard logo={BAKALLAND}></ClientCard>
                    <ClientCard logo={POLMLEK}></ClientCard>
                    <ClientCard logo={LOWICZ}></ClientCard>
                    <ClientCard logo={MLEKOVITA}></ClientCard>
                </div>
            </div>
        </Container>
    );
}
