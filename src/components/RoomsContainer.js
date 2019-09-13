import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomList from "./RoomList";
import Loading from "./Loading";
import { ItemConsumer } from "../context";

const RoomsContainer = () => {
  return (
    <ItemConsumer>
      {value => {
        const { loading, sortedRooms, rooms } = value;
        if (loading) {
          return <Loading />;
        }
        return (
          <div>
            <RoomsFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} />
          </div>
        );
      }}
    </ItemConsumer>
  );
};

export default RoomsContainer;
