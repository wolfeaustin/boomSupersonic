import React from "react";
import { Dropdown, Icon } from "semantic-ui-react";

let departureOptions = [
  { key: "Dublin", value: "Dublin", text: "Dublin" },
  { key: "Paris", value: "Paris", text: "Paris" },
  { key: "Doha", value: "Doha", text: "Doha" },
  { key: "Singapore", value: "Singapore", text: "Singapore" },
  { key: "Boston", value: "Boston", text: "Boston" }
];
let arrivalOptions = [
  { key: "Boston", value: "Boston", text: "Boston" },
  { key: "Paris", value: "Paris", text: "Paris" },
  { key: "Narita", value: "Narita", text: "Narita" },
  { key: "Zurich", value: "Zurich", text: "Zurich" },
  { key: "Dubai", value: "Dubai", text: "Dubai" },
  { key: "New York", value: "New York", text: "New York" },
  { key: "Singapore", value: "Singapore", text: "Singapore" },
  { key: "Chicago", value: "Chicago", text: "Chicago" },
  { key: "Melbourne", value: "Melbourne", text: "Melbourne" },
  { key: "Beijing", value: "Beijing", text: "Beijing" },
  { key: "Hong Kong", value: "Hong Kong", text: "Hong Kong" },
  { key: "Kuala Lumpur", value: "Kuala Lumpur", text: "Kuala Lumpur" },
  { key: "Madrid", value: "Madrid", text: "Madrid" }
];

let destinationCities = [
  { departure: "Dublin", arrivalCities: [{ city: "Boston" }] },
  {
    departure: "Boston",
    arrivalCities: [
      { city: "Paris" },
      { city: "Madrid" },
      { city: "Narita" },
      { city: "Zurich" },
      { city: "Dubai" }
    ]
  },
  {
    departure: "Paris",
    arrivalCities: [{ city: "New York" }]
  },
  {
    departure: "Doha",
    arrivalCities: [
      { city: "Singapore" },
      { city: "Melbourne" },
      { city: "Chicago" },
      { city: "Kuala Lumpur" }
    ]
  },
  {
    departure: "Singapore",
    arrivalCities: [{ city: "Hong Kong" }, { city: "Beijing" }]
  }
];

class Selector extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedDeparture: {},
      selectedArrival: {},
      arrivals: {},
      destinations: {},
      citiesArray: [
        { departure: "Dublin", arrivalCities: [{ city: "Boston" }] },
        {
          departure: "Boston",
          arrivalCities: [
            { city: "Paris" },
            { city: "Madrid" },
            { city: "Narita" },
            { city: "Zurich" },
            { city: "Dubai" }
          ]
        },
        {
          departure: "Paris",
          arrivalCities: [{ city: "New York" }]
        },
        {
          departure: "Doha",
          arrivalCities: [
            { city: "Singapore" },
            { city: "Melbourne" },
            { city: "Chicago" },
            { city: "Kuala Lumpur" }
          ]
        },
        {
          departure: "Singapore",
          arrivalCities: [{ city: "Hong Kong" }, { city: "Beijing" }]
        }
      ]
    };
  }
  handleArrival = e => {
    //whenever the arrival is changed, update the departures
    console.log(e.currentTarget.innerText);
  };
  handleDeparture = e => {
    //whenever the destination is changed, update the arrivals
    console.log(e.currentTarget.innerText);
    let city = e.currentTarget.innerText;
    let destinations = this.state.citiesArray.find(c => c.departure == city);
    // debugger;
    // console.log(destinations);
    destinations.arrivalCities.forEach(i => console.log(i.city));
    // let temp = this.state;
    // debugger;
  };
  render() {
    return (
      <div>
        <Dropdown
          placeholder="Departure City"
          style={{ margin: "10px" }}
          onChange={this.handleDeparture}
          search
          selection
          options={departureOptions}
        />
        <Icon name="arrow right" />
        <Dropdown
          placeholder="Arrival City"
          style={{ margin: "10px" }}
          onChange={this.handleArrival}
          search
          selection
          options={arrivalOptions}
        />
      </div>
    );
  }
}

export default Selector;
