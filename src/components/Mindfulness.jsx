import React from "react";
import meditationImage from "../svgs/undraw_mindfulness_scgo.svg";

export default function Mindfulness(props) {
  return (
    <div className="alter-color-wrapper">
      <section className="mindfulness">
        <div className="mindfulness__content-wrapper">
          <div className="mindfulness__text">
            <h2>La importancia de la salud mental en tiempos de cuarentena</h2>
            <p>
              La cuarentena nos ha alejado de la calle, de respirar aire fresco,
              de hacer planes con familia y amigos y practicar deportes. Estar
              tantos días en casa nos puede provocar problemas físicos pero
              también psicológicos, si no tomamos las medidas adecuadas. Es
              fundamental planificar el día y ponerse horarios,{" "}
              <span>claves para la salud mental</span> durante el confinamiento.
            </p>
          </div>
          <div className="mindfulness__image">
            <img src={meditationImage} alt="Meditation" />
          </div>
        </div>
      </section>
    </div>
  );
}
