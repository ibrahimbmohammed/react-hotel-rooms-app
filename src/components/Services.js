import React, { Component } from "react";
import Title from "./Title";
import { FaChromecast, FaHiking, FaBusAlt, FaSwimmer } from "react-icons/fa";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaChromecast />,
        title: "free data",
        info: "free and unlimited data"
      },
      {
        icon: <FaHiking />,
        title: "free hiking",
        info: "24 hours free hiking"
      },
      {
        icon: <FaBusAlt />,
        title: "free tour",
        info: "explore without limits"
      },
      {
        icon: <FaSwimmer />,
        title: "free swimming",
        info: "unlimited access to varaity of pools"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span> {item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
