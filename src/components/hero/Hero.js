
import React from "react";
import { CTA } from "./CTA";
import Tag from "../tag/Tag";
import HERO_PHOTO from "../../resources/HERO_PHOTO.png";
import HERO_PHOTO_BOTTOM_RIGHT from "../../resources/HERO_BOTTOM_RIGHT_ACCENT_PHOTO.png";
import HERO_PHOTO_BOTTOM_LEFT from "../../resources/HERO_BOTTOM_LEFT.png";
import AutoPlayVideo from "../AutoPlayVideo";
export function Hero() {
  return (
    <div className="hero__container">
      <div className="hero__container--left">
        <CTA />
        <div className="hero__footer-container">
          <img src={HERO_PHOTO_BOTTOM_LEFT}></img>
          <div className="hero__footer-content">
            <div className="heritage">
              <Tag text={"działamy od 1993"}></Tag>
              <div className="hertitage__container">
                <span className="heritage-text--strong">30</span> <span className="heritage-text--medium">lat</span> <br /> <span className="heritage-text">doświadczenia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero__container--right">
        {/* <img src={HERO_PHOTO}></img> */}
        <AutoPlayVideo></AutoPlayVideo>
        <img src={HERO_PHOTO_BOTTOM_RIGHT}></img>
      </div>
    </div>
  );
}
