import React from "react";

import ParallaxRow from "../../components/parallax-row/parallax-row.component";

import "./philosophy.styles.scss";
import philoHero from "../../assets/philo-hero.jpg";
import philo1 from "../../assets/philo1.jpg";
import philo2 from "../../assets/philo2.jpg";

const Philosphy = () => {
  return (
    <div className="philosphy">
      <div className="row">
        <span className="row-header hero-header right">
          Twice he chimes the
          <br />
          spoon upon the coffee cup.
        </span>
      </div>
      <div className="row">
        <p className="left">
          He sips with his eyes closed, listening to his head beat with his
          heart. A heavy night; an early morning. Across from him, up against
          the workshop wall, is a desk lamp-lit with white light. The cloth, the
          patterns and his chalk awaits.
        </p>
      </div>
      <div className="row">
        <p className="right">
          One thing at a time, he was told, there is always a journey. A
          history. A tradition. And though one may feel these aspects of craft
          slipping away, there is always its life-line - a bright thread pathing
          between the trees - always within reach.
        </p>
      </div>
      <div className="row">
        <div className="col">
          <img src={philo1} alt="model" width="100%" />
        </div>
        <p className="col left dark" style={{ marginTop: "40vh" }}>
          Remembering once there was not a workshop but a apartment where his
          Master sat late in the evening with his sewing machine. He became
          familiar to the heavy chunking sounds and the quiet hisses of his
          mentor's frustration. The drift of pipe smoke. In the mornings, his
          Master would show what he had produced to the apprentices and would
          lead them though each intricate part of the garment at a remarkable,
          confounding speed.
        </p>
      </div>
      <div className="row">
        <p className="left">
          “What seems to me the highest and the most difficult achievement of
          Art is not to make us laugh or cry, or to rouse our lust or our anger,
          but to do as nature does — that is, fill us with wonderment.”
        </p>
      </div>
      <div className="row">
        <span className="row-header hero-header right">
          —— Gustave Flaubert
        </span>
      </div>
      <div className="row"></div>
      <div className="row">
        <p className="center dark">
          That was the tradition, the way things were passed down over and over
          again, one generation to the next. Beautifully woven and sewn
          neck-ties were soft to the touch and sturdy at the neck. Tough
          overcoats heavy and more handsome with each winter passed. Trousers
          with patterns of maze-like subtlety enhanced with his human touch:
          years of practice turned passion turned mastery.
        </p>
      </div>
      <div className="row">
        <p className="col left dark">
          His Master's coveted and celebrated craft was born from a pot of
          esoteric cultures. Families of industrialists and aristocracies all
          over the world would see to it to share with him ideas on pleasures of
          custom elegance. Interestingly, it was the globe-trotting clientele
          who brought new designs and fresh ideas, which then his Master
          realized into physical form. It was this relationship with customers,
          which helped in the discovery of new techniques and paved the way for
          the craft to grow. Now, the apprentice takes his seat at the workshop,
          grown and with years under his belt. He remembers, with a sense of
          irony, his mentor would say
        </p>
        <div className="col">
          <img src={philo2} alt="model" width="100%" />
        </div>
      </div>
      <div className="row grey">
        <span className="row-header center dark">
          - "The man is nothing, the work everything!"
        </span>
      </div>
      <ParallaxRow background={`url(${philoHero})`} top="0" brightness="30%" />
      <ParallaxRow
        background={`url(${philoHero})`}
        top="1000"
        brightness="30%"
      />
    </div>
  );
};

export default Philosphy;
