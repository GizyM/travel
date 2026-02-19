import Image from "next/image";
import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__map" />

      <div className="hero__content">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="hero__camp-icon"
        />

        <h1 className="hero__title">Triund Hill Camp Area</h1>

        <p className="hero__description">
          We want to be on each of your journeys seeking the satisfaction of
          seeing the incorruptible beauty of nature. We can help you on an
          adventure around the world in just one app
        </p>

        <div className="hero__reviews-row">
          <div className="hero__stars">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>

          <p className="hero__reviews-text">
            198k <span className="hero__reviews-subtext">Excellet Reviews</span>
          </p>
        </div>

        <div className="hero__buttons">
          <Button type="button" title="Download App" variant="btn_green" />
          <Button
            type="button"
            title="How we work?"
            icon="/play.svg"
            variant="btn_white_text"
          />
        </div>
      </div>

      <div className="hero__card-wrap">
        <div className="hero__card">
          <div className="hero__card-block">
            <div className="hero__card-top">
              <p className="hero__card-label">Location</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="hero__card-value">Triund Hill</p>
          </div>

          <div className="hero__card-grid">
            <div className="hero__card-col">
              <p className="hero__card-label">Distance</p>
              <p className="hero__card-value">18 Km</p>
            </div>

            <div className="hero__card-col">
              <p className="hero__card-label">Elevation</p>
              <p className="hero__card-value">2.850 Km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
