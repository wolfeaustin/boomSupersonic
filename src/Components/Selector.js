import React from "react";
import { Dropdown, Icon } from "semantic-ui-react";

class Selector extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedDeparture: "",
      selectedArrival: "",
      allRoutes: [],
      departures: [{ key: 0, text: "default", value: "sothing" }],
      availableDestinations: [{ key: 0, text: "default" }]
    };
  }

  render() {
    return (
      <div>
        <Dropdown
          placeholder="Departure City"
          style={{ margin: "10px" }}
          onChange={this.props.handleDeparture}
          search
          selection
          options={this.props.departures}
        />
        <Icon color="grey" name="arrow right" />
        <Dropdown
          placeholder="Arrival City"
          style={{ margin: "10px" }}
          onChange={this.props.handleArrival}
          search
          selection
          options={this.props.availableDestinations}
        />
      </div>
    );
  }
}

export default Selector;
