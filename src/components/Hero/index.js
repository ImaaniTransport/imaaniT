import React, { useState } from "react";
import "./style.css";
import Card from "../UI/Card";

const Hero = (props) => {
  const [active, setActive] = useState("track");

  const handleResize = (value) => {
    setActive(value);
  };

  let send =
    active === "send" ? "tilesPicBackground active" : "tilesPicBackground";
  let track =
    active === "track" ? "tilesPicBackground active" : "tilesPicBackground";
  let location =
    active === "location" ? "tilesPicBackground active" : "tilesPicBackground";

  return (
    <div className="backgroundImage">
      <div className="welcomeContainer">
        <div className="imani">
          <div className="tilesContainer">
            <div
              className={send}
              onClick={() => {
                handleResize("send");
              }}
            >
              <Card
                name="Send"
                image={require("../../container/images/senditem.png")}
              />
            </div>
            <div
              onClick={() => {
                handleResize("track");
              }}
              className={track}
            >
              <Card
                name="Track"
                image={require("../../container/images/track.png")}
              />
            </div>
            <div
              onClick={() => {
                handleResize("location");
              }}
              className={location}
            >
              <Card
                name="Location"
                image={require("../../container/images/location.png")}
              />
            </div>
          </div>

          <div className="trackingWrapper">
            <div className="trackingIDcontainer">
              <h1>1 - 3 Days Delivery Across West Africa</h1>
              <div className="trackingInput">
                <input
                  type="text"
                  className="input"
                  placeholder="TRACKING ID"
                />
                <button type="button" className="button">
                  TRACK
                </button>
              </div>
            </div>

            <div className="tracking">
              <a href="#">MULTIPLE TRACKING NUMBERS</a>|
              <a href="#">NEED HELP?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
