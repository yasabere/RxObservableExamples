import React, { Component } from "react";

export default class Example01 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
  }

  onKeyUp = e => {
    getItems(e.target.value).then(items2 => {
      this.setState({
        items: items2
      });
    });
  };

  render() {
    const { items } = this.state;
    return (
      <div>
        <h2>Example 01 Basic</h2>
        <h3>Auto Complete</h3>
        <input onKeyUp={this.onKeyUp} />
        <ul>
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const getItems = title => {
  console.log(`Querying ${title}`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([title, "Item 2", `Another ${Math.random()}`]);
    }, 500 + Math.random() * 5000);
  });
};
