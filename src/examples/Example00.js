import moment from "moment";
import React, { Component } from "react";

export default class Example00 extends Component {
  render() {
    const time = moment().format();

    return (
      <div>
        <h2>Example 00</h2>
        Time:
        {time}
      </div>
    );
  }
}
