import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
export default function HomePage() {
  return (
    <>
      <Hero>
        <Banner
          title="comfortable rooms"
          subtitle="deluxe rooms starting at $5000"
        >
          <Link className="btn-primary" to="/rooms">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
}
