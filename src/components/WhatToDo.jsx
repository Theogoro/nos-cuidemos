import React from "react";
import questionImage from "../svgs/undraw_Questions_re_1fy7.svg";

export default function WhatToDo(props) {
  return (
    <section className="what-to-do">
      <div className="what-to-do__content-wrapper">
        <div className="what-to-do__image">
          <img src={questionImage} alt="Quetion" />
        </div>
        <div className="what-to-do__text">
          <h2>¿Que hacer con tanto tiempo en casa?</h2>
          <p>
            La cantidad de horas que pasaremos en nuestros hogares (solos o en
            compañía) han abierto un inmenso abanico de posibilidades para
            disfrutar del tiempo libre: cultura, formación, cocina o deporte. Es
            importante usar este tiempo.
          </p>
        </div>
      </div>
    </section>
  );
}
