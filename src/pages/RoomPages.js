import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import RoomsContainer from "../components/RoomsContainer";

export default function() {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our  rooms" btn="hello">
          <Link to="/" className="btn-primary">
            {" "}
            return home{" "}
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </>
  );
}
