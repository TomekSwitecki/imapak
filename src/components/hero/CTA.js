import React from "react";
import Button, { ButtonShape, ButtonColor, ButtonType } from "../button/Button";
import { _scrollTo } from "../navbar/utils";

export function CTA() {
  return (
    <div className="cta__wrapper">
      <div className="cta-title__container">
        <div className="cta-title">
          Nowoczesne zakłady produkcyjne
        </div>
      </div>
      <div className="cta__content-wrapper">
        <div className="cta__paragraph">
          Wspieramy wdrażania procesów automatyzacji
          <br />
          zakładów produkcyjnych
        </div>

        <Button
          type={ButtonType.Filled}
          color={ButtonColor.Default}
          append={<box-icon name='right-arrow-alt' ></box-icon>}
          text={"Dowiedz się więcej!"}
          onClick={() => handleScrollToId("kontakt")}
        />
      </div>


    </div>
  );
}
