import React from "react";
import "./style.css";
import SocialMedia from "..//..//components/SocialMedia";
import tilesImageAndText from "..//..//components/tilesImageAndText";

const Home = (props) => {
  return (
    <div className="container">
      <div className="home">
        <div className="safetyContainer">
          <div className="safety1">
            <p>Safety above all</p>
            <p>
              We recognize the trust you place in us when we deliver to your
              doorstep, shipping dock or place of business. Thats why we want to 
              keep you informed on the actions we are taking to keep you and all
              our team members safe amids the COVID-19 outbreak.
            </p>
            <a href="#">LEARN MORE</a>
          </div>
          <div className="safety2">
            <img
              src={require("..//../container/images/road.jpg")}
              alt="logo"
              width="100%"
              height="100%"
            />
          </div>
        </div>

        <div className="customersContainerText">
          <h4>When You And Your Customers need it most</h4>
          <p>
            Global effort to stop the spread of COVID-19 have changed the world
            and the way to do business overnight. We're here to help your
            business deliver when you and your customers need it most.
          </p>
        </div>

        <div className="picsBottomContainer">
          <div className="picsBottom">
            {" "}
            <img
              src={require("..//../container/images/imaaniExpress.jpg")}
              alt="logo"
              width="100%"
              height="100%"
            />
          </div>
          <div className="picsBottom">
            <img
              src={require("..//../container/images/imaaniRelocate.jpg")}
              alt="logo"
              width="100%"
              height="100%"
            />
          </div>
          <div className="picsBottom">
            <img
              src={require("..//../container/images/imaaniBusinessPack.jpg")}
              alt="logo"
              width="100%"
              height="100%"
            />
          </div>
        </div>

        <div className="tilesTextContainer">
          <div className="tilesText1">
            <h4>Imaani Express</h4>
            <p>
              Learn about all FedEx has to offer for shipping across borders.
              Prepare and find international documents, estimate duties and
              taxes, search country profiles, harmonized codes and much more.
            </p>
            <a href="#">LEARN MORE</a>
          </div>

          <div className="tilesText1">
            <h4>Imaani Relocate</h4>

            <p>
              Learn about all FedEx has to offer for shipping across borders.
              Prepare and find international documents, estimate duties and
              taxes, search country profiles, harmonized codes and much more.
            </p>
            <a href="#">LEARN MORE</a>
          </div>

          <div className="tilesText1">
            <h4>Imanni Business Pack</h4>
            <p>
              Learn about all FedEx has to offer for shipping across borders.
              Prepare and find international documents, estimate duties and
              taxes, search country profiles, harmonized codes and much more.
            </p>
            <a href="#">GET STARTED</a>
          </div>
        </div>

        <div className="safetyContainer">
          <div className="safety1">
            <p>Safety above all</p>
            <p>
              We recognize the trust you place in us when we deliver to your
              doorstep, shipping dock or place of business. Thats why we want to
              keep you informed on the actions we are taking to keep you and all
              our team members safe amids the COVID-19 outbreak.
            </p>
            <a href="#">SEE HOW</a>
          </div>
          <div className="safety2">
            <img
              src={require("..//../container/images/delivery.jpg")}
              alt="logo"
              width="100%"
              height="100%"
            />
          </div>
        </div>

        <div className="bottonNavBarContainer">
          <div className="bottonNavBarText">
            <h4>OUR COMPANY </h4>
            <p>
              <a href="#">About Imani Transport</a>
            </p>
            <p>
              <a href="#">Careers</a>
            </p>
            <p>
              <a href="#">International Holiday Schedule</a>
            </p>
            <p>
              <a href="#">Conditions of Carriage</a>
            </p>
            <p>
              <a href="#">Binding Coporate Rules</a>
            </p>
          </div>
          <div className="bottonNavBarText">
            <h4>NEW CUSTOMER</h4>
            <a href="#">Open an Account</a>
          </div>
          <div className="bottonNavBarText">
            <h4>MORE FROM IMANI TRANSPORT</h4>
            <p>
              <a href="#">Fuel Surcharges</a>
            </p>
            <p>
              <a href="#">Resources</a>
            </p>
            <p>
              <a href="#">Imani Transport Location</a>
            </p>
          </div>
          <div className="bottonNavBarText">
            <h4>LANGUAGE</h4>
            <a href="#">Ghana</a>
          </div>
        </div>

        <div className="socialMediaIconsContainer">
          <p>FOLLOW IMANI TRANSPORT</p>
          <div className="socialMediaIcons">
            <SocialMedia
              image={require("../../container/images/message.jpg")}
            />
          </div>
          <div className="socialMediaIcons">
            <SocialMedia
              image={require("../../container/images/twitter.jpg")}
            />
          </div>
          <div className="socialMediaIcons">
            <SocialMedia
              image={require("../../container/images/facebook.jpg")}
            />
          </div>
          <div className="socialMediaIcons">
            <SocialMedia
              image={require("../../container/images/instagram.jpg")}
            />
          </div>
        </div>
      </div>

      <div className="footer">
        <p>©IMANI TRANSPORT 2019-2020</p>
        <div className="footerLinks">
          <a href="#">Site Map</a>|<a href="#">Terms of Use</a>|
          <a href="#">Security and Privacy</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
