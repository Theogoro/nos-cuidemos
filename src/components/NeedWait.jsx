import React from "react";
import doctorImage from "../svgs/undraw_medical_research_qg4d.svg";
import "./NeedWait.css";

export default function NeedWait(props) {
  return (
    <div className="alter-color-wrapper">
      <section className="need-wait">
        <div className="need-wait__content-wrapper">
          <div className="need-wait__text">
            <h2>Siempre que llovió, paró</h2>
            <p>
              La vacuna aunque parezca distante va a llegar, solo debemos de
              esperar y vamos a poder volver a nuestra <span>vida normal</span>.
            </p>
          </div>
          <div className="need-wait__image">
            <img src={doctorImage} alt="Doctor" />
          </div>
        </div>
      </section>
    </div>
  );
}
