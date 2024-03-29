import React, { Component } from "react";
import { ItemContext } from "../context";
import Loading from "./Loading";
import Title from "./Title";
import Room from "./Room";
export default class FeaturedRooms extends Component {
  static contextType = ItemContext;
  render() {
    let { loading, featuredRooms: rooms } = this.context;
    rooms = rooms.map(room => {
      return <Room key={room.id} room={room} />;
    });
    return (
      <section className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}
