import React from "react";
import { Parallax } from "react-scroll-parallax";

import Video from "../../components/video/video.component";
import Footer from "../../components/footer/footer.component";

import "./homepage.styles.scss";

const HomePage = () => (
  <div className="homepage">
    <div className="hero">
      <Video url="https://bon-vivant-videos.s3-ap-southeast-1.amazonaws.com/bon-vivant.mp4" />
    </div>
    <div className="row">
      <span className="row-header hero-header">
        Handmade tailord clothing,
        <br />
        for those who live well.
      </span>
      <p className="left">
        Our experience in the world of menswear has given us the ability to
        source and produce quality accessories and garments from makers and
        artisans around the world at a honest and equitable price. For example,
        each tie we produce is handmade in Ishikawa Prefecture, Japan, using
        only the finest materials and craftsmanship.
      </p>
    </div>
    <div className="row">
      <span className="row-header left dark">
        Bon Vivant is an idea of appreciation,
      </span>
      <p className="right dark">
        that there exists an intrinsic value to things that give joy in life.
        These works consist of ideas and memories that bear a connection to the
        past. What was before considered dated has been transmuted by the mere
        passing of years to a status at once modern and prevalent.
      </p>
    </div>
    <div className="hero grey" />
    <Footer horizontal />
  </div>
);

export default HomePage;
