import React from "react";
import image from "../svgs/undraw_empty_street_sfxm.svg";
import "./Hero.css";

export default function Hero(props) {
  return (
    <section className="hero">
      <div className="hero__content-wrapper">
        <div className="hero__image">
          <img src={image} alt="Hero" />
        </div>
        <div className="hero__text">
          <h2>En tiempos donde las calles estan vacias</h2>
          <p>
            Es importante cuidanos y para salir aun mas fuertes. Por eso hoy
            queremos darte consejos de como cuidarte y cuidanos entre todos.
          </p>
        </div>
      </div>
    </section>
  );
}
