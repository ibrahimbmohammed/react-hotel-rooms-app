import React, { Component } from "react";
import items from "./data";

const ItemContext = React.createContext();
class ItemProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  };
  // getData = async () =>{
  //  try{
  //    let response= await ClientRect.getEntries({
  //      content_type:"roomswiki"
  //order:"sys.createdAt"
  //    })
  //  } catch (error){
  //    console.log(error)
  //  }
  // }

  componentDidMount() {
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter(room => room.featured === true);
    let maxPrice = Math.max(...rooms.map(item => item.price));
    let maxSize = Math.max(...rooms.map(item => item.size));
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize
    });
  }
  getRoom = slug => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find(room => room.slug === slug);
    return room;
  };
  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;
    this.setState(
      {
        [name]: value
      },
      this.filterRooms
    );
  };
  filterRooms = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets
    } = this.state;
    let tempItems = [...rooms];
    // converting capacity to string
    capacity = parseInt(capacity);
    price = parseInt(price);
    if (type !== "all") {
      tempItems = tempItems.filter(room => room.type === type);
    }
    // filter capacity
    if (capacity !== 1) {
      tempItems = tempItems.filter(room => room.capacity >= capacity);
    }
    // by price
    tempItems = tempItems.filter(room => room.price <= price);
    //fiter by size
    tempItems = tempItems.filter(
      room => room.size >= minSize && room.size <= maxSize
    );
    //filter by checkboxe
    if (breakfast) {
      tempItems = tempItems.filter(room => room.breakfast === true);
    }
    // filter by second checkbox
    if (pets) {
      tempItems = tempItems.filter(room => room.pets === true);
    }
    this.setState({
      sortedRooms: tempItems
    });
  };

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }
  render() {
    return (
      <ItemContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </ItemContext.Provider>
    );
  }
}

const ItemConsumer = ItemContext.Consumer;

export { ItemProvider, ItemConsumer, ItemContext };
