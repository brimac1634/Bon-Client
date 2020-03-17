import React from "react";

import Video from "../../components/video/video.component";
import ParallaxRow from "../../components/parallax-row/parallax-row.component";

import "./homepage.styles.scss";

const HomePage = () => (
  <div className="homepage">
    <div className="row">
      <span className="row-header hero-header right">
        Handmade tailord clothing,
        <br />
        for those who live well.
      </span>
    </div>
    <div className="row">
      <p className="left">
        Our experience in the world of menswear has given us the ability to
        source and produce quality accessories and garments from makers and
        artisans around the world at a honest and equitable price. For example,
        each tie we produce is handmade in Ishikawa Prefecture, Japan, using
        only the finest materials and craftsmanship.
      </p>
    </div>
    <div className="row grey">
      <span className="row-header left dark">
        Bon Vivant is an idea of appreciation,
      </span>
    </div>
    <div className="row grey">
      <p className="right dark">
        that there exists an intrinsic value to things that give joy in life.
        These works consist of ideas and memories that bear a connection to the
        past. What was before considered dated has been transmuted by the mere
        passing of years to a status at once modern and prevalent.
      </p>
    </div>
    <ParallaxRow top="0">
      <Video url="https://bon-vivant-videos.s3-ap-southeast-1.amazonaws.com/bon-vivant.mp4" />
    </ParallaxRow>
  </div>
);

export default HomePage;
