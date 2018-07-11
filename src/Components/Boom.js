import React from "react";
import Selector from "./Selector";
import Calculator from "./Calculator";
class Boom extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedDeparture: "",
      selectedArrival: "",
      mileage: "", //in miles
      direction: "",
      allRoutes: [],
      departures: [{ key: 0, text: "default", value: "sothing" }],
      availableDestinations: [{ key: 0, text: "default" }]
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/routes")
      .then(r => r.json())
      .then(trips => this.handleInitialSetUp(trips));
  }

  handleInitialSetUp = trips => {
    let depart = trips.map(t => t.departure);
    let uniques = [...new Set(depart)].map(i => ({
      text: i,
      key: i,
      value: i
    }));

    this.setState({
      departures: uniques,
      allRoutes: trips
    });
  };

  handleArrival = e => {
    //whenever the arrival is changed, update the departures

    let city = e.currentTarget.innerText;
    let route = this.state.allRoutes.find(
      r => r.departure == this.state.selectedDeparture && r.arrival == city
    );

    this.setState({
      selectedArrival: city,
      mileage: route.distance,
      direction: route.direction
    });
  };
  handleDeparture = e => {
    //whenever the destination is changed, update the arrivals

    let city = e.currentTarget.innerText;
    let arrivals = this.state.allRoutes
      .filter(r => r.departure == city)
      .map(c => c.arrival);
    this.setState({
      selectedDeparture: city,
      availableDestinations: arrivals.map(i => ({ text: i, key: i, value: i }))
    });
  };

  render() {
    return (
      <div>
        <h1>BOOM</h1>
        <Selector
          handleArrival={this.handleArrival}
          handleDeparture={this.handleDeparture}
          selectedDeparture={this.state.selectedDeparture}
          selectedArrival={this.state.selectedArrival}
          allRoutes={this.state.allRoutes}
          departures={this.state.departures}
          availableDestinations={this.state.availableDestinations}
        />
        {this.state.mileage == "" ? (
          <div />
        ) : (
          <Calculator
            selectedDeparture={this.state.selectedDeparture}
            selectedArrival={this.state.selectedArrival}
            mileage={this.state.mileage}
            direction={this.state.direction}
          />
        )}
      </div>
    );
  }
}

export default Boom;
