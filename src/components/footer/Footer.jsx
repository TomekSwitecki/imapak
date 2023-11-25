
import React from "react";
import FOOTER_LOGO from "../../resources/FOOTER_LOGO.png";
export function Footer(props) {


    const Copyrights = () => {
        return (
            <div className="footer__copyritgh-section">
                <p className="footer__copyrights">
                    Copyright ©2023 IMAPAK  All right reserved
                </p>
            </div>
        );
    };

    return (
        <footer className="footer" id="kontakt">
            <div className="footer__container">
                <div className="footer__top">
                    <img src={FOOTER_LOGO}></img>
                    <div className="footer__title"><span className="text--highlight">Nowoczesne</span> zakłady <br />produkcyjne</div>
                </div>
                <div className="footer__bottom">
                    <div className="footer__card">
                        <div className="footer__card-content">
                            <span className="footer__card-text--bold">BABICE 111H, 95-083</span>
                            <span className="footer__card-text--light">BABICE</span>
                            <div className="footer__hr"></div>
                            <div className="footer__link">
                                <a href="https://www.google.pl/maps/place/Babice+111,+95-083+Babice/@51.7722509,19.2529099,17z/data=!3m1!4b1!4m5!3m4!1s0x471a4c9bd7fedad1:0x7868544c4f8e3270!8m2!3d51.7722476!4d19.2554848?entry=ttu" className="footer__card-text--link">GOOGLE MAPS</a>
                                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.667 7L0.666992 13.9282L0.666993 0.0717964L12.667 7Z" fill="#D2CBC0" />
                                </svg>
                            </div>


                        </div>

                    </div>
                    <div className="footer__card">
                        <div className="footer__card-content">
                            <span className="footer__card-text--bold">info@<span className="footer__card-text--light">imapak.eu</span></span>
                            <span className="footer__card-text--bold">serwis@<span className="footer__card-text--light">imapak.eu</span></span>
                            <div className="footer__hr"></div>
                        </div>

                    </div>

                    <div className="footer__card footer__card--highlight">
                        <div className="footer__card-content">
                            <span className="footer__card-text--bold">+42 258 96 75</span>

                            <div className="footer__hr"></div>
                        </div>

                    </div>

                </div>

            </div>
            <Copyrights />
        </footer>
    );
}
