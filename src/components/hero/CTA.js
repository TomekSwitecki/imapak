import React from "react";
import Button, { ButtonShape, ButtonColor, ButtonType } from "../button/Button";
import { _scrollTo } from "../navbar/utils";
const handleScrollToId = (id) => {
  const element = document.getElementById(id);
  console.log(element);
  if (element) {
    _scrollTo(id, 70);
  }
};
export function CTA() {
  return (
    <div className="cta__wrapper">
      <div className="cta-title__container">
        <div className="cta-title">
          Nowoczesne linie pakujące
        </div>
      </div>
      <div className="cta__content-wrapper">
        <div className="cta__paragraph">
          Wspieramy procesy optymalizacji i modernizacji
          <br />
          zakładów produkcyjnych
        </div>

        <Button
          type={ButtonType.Filled}
          color={ButtonColor.Default}
          append={<box-icon name='right-arrow-alt' ></box-icon>}
          text={"Dowiedz się więcej!"}
          onClick={() => handleScrollToId("about_section")}
        />
      </div>


    </div>
  );
}
