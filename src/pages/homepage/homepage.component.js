import React, { useState } from "react";

import Directory from "../../components/directory/directory.component";
import JoinMail from "../../components/join-mail/join-mail.component";
import Video from "../../components/video/video.component";
import Loader from "../../components/loader/loader.component";

import "./homepage.styles.scss";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="homepage">
      <div className="hero">
        <Video
          url="https://bon-vivant-videos.s3-ap-southeast-1.amazonaws.com/bon-vivant.mp4"
          setLoading={setIsLoading}
        />
        <span>
          Handmade tailord clothing,
          <br />
          for those who live well.
        </span>
      </div>
      <div className="row grey">
        <div className="col">
          <h2 className="center">
            Men's Haberdashery specialising in handmade tailored clothing for
            those who live well.
          </h2>
          <p className="center">
            Bon Vivant is an idea of appreciation - that there exists an
            intrinsic value to things that give joy in life. These works consist
            of ideas and memories that bear a connection to the past. What was
            before considered dated has been transmuted by the mere passing of
            years to a status at once modern and prevalent.
          </p>
        </div>
      </div>
      <div className="row">
        <Directory />
      </div>
      <div className="row grey">
        <div className="col">
          <p className="center">
            Our experience in the world of menswear has given us the ability to
            source and produce quality accessories and garments from makers and
            artisans around the world at a honest and equitable price. For
            example, each tie we produce is handmade in Ishikawa Prefecture,
            Japan, using only the finest materials and craftsmanship.
          </p>
        </div>
      </div>
      <div className="row">
        <JoinMail />
      </div>
      <div className="row grey">
        <div className="col">
          <p className="center">
            Our leisurewear collection is an amalgamation of tailored smartness
            and laissez faire elegance. It speaks of modernity and brings
            together only the best details of classic garments. While the
            clothes feel relaxed and are never constricting, it maintains a
            flattering line throughout the body. In essence, it is the ultimate
            expression of Tailoring.
          </p>
        </div>
      </div>
      {isLoading && <Loader fixed />}
    </div>
  );
};

export default HomePage;
