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
      ascendTimeBoom: 0.75,
      descendTimeBoom: 0.75,
      ascendTimeReg: 0.75,
      descendTimeReg: 0.75,
      refuelTime: 0.75
    };
  }
  reCalculateBoom() {
    let boom;
    this.props.mileage > 5179
      ? (boom =
          this.props.mileage / this.state.speedOfBoom +
          (this.state.ascendTimeBoom + this.state.descendTimeBoom) * 2 +
          this.state.refuelTime)
      : (boom =
          this.props.mileage / this.state.speedOfBoom +
          (this.state.ascendTimeBoom + this.state.descendTimeBoom));
    return <div>{this.timeToHoursMinutes(boom)}</div>;
  }
  timeToHoursMinutes(num) {
    let hours = Math.floor(num);
    let minutes = Math.floor((num - hours) * 60);
    return `${hours} hours ${minutes} minutes`;
  }
  reCalculateReg() {
    let regTime =
      this.props.mileage / this.state.speedOfStandard +
      this.state.ascendTimeReg +
      this.state.descendTimeReg;
    return <div>Instead of {this.timeToHoursMinutes(regTime)}</div>;
  }
  render() {
    return (
      <div class="calcText">
        <h3>
          Traveling from {this.props.selectedDeparture} to{" "}
          {this.props.selectedArrival}
        </h3>
        <h3>Total Mileage:</h3>
        {this.props.mileage}
        <div class="largerText">{this.reCalculateBoom()}</div>
        <div class="smallerText">{this.reCalculateReg()}</div>
      </div>
    );
  }
}

export default Calculator;
