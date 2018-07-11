import React from "react";
//flight mileage take from webflyer.com
class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      boomTime: 0,
      regTime: 0,
      speedOfBoom: 1687.99,
      speedOfStandard: 575,
      ascendTime: 0.75,
      descendTime: 0.75,
      refuelTime: 0.75
    };
  }
  componentDidMount() {
    let boom;
    this.props.mileage > 5179
      ? (boom =
          this.props.mileage / this.state.speedOfBoom +
          (this.state.ascendTime + this.state.descendTime) * 2 +
          this.state.refuelTime)
      : (boom =
          this.props.mileage / this.state.speedOfBoom +
          (this.state.ascendTime + this.state.descendTime));
    this.setState({ boomTime: boom });
  }
  render() {
    return (
      <div>
        <h3>Selected Departure:</h3>
        {this.props.selectedDeparture}
        <h3>Selected Departure:</h3>
        {this.props.selectedArrival}
        <h3>Total Mileage:</h3>
        {this.props.mileage}
        <h3>Direction:</h3>
        {this.props.direction}
        <h3>Time on normal airline:</h3>

        <h3>Time with BOOM:</h3>
        {this.state.boomTime}
      </div>
    );
  }
}

export default Calculator;
