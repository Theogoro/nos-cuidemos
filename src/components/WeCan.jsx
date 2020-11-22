import React from "react";
import successImage from "../svgs/undraw_finish_line_katerina_limpitsouni_xy20.svg";

export default function WeCan(props) {
  return (
    <section className="we-can">
      <div className="we-can__content-wrapper">
        <div className="we-can__image">
          <img src={successImage} alt="Success" />
        </div>
        <div className="we-can__text">
          <h2>Vamos a superarlo</h2>
          <p>
            Es importante no perder la esperanza, la fe o lo que sea en lo que
            creamos de que esta situacion la vamos a superar, va a ser duda,
            pero <span>vamos a superarlo</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
