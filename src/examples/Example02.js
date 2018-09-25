import React, { Component } from "react";
import Rx, { Subject } from "rxjs/Rx";

const keyUps$ = new Subject();

export default class Example01 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    keyUps$
      .distinctUntilChanged()
      .debounceTime(200)
      .mergeMap(getItems)
      .subscribe(items2 => {
        this.setState({
          items: items2
        });
      });
  }

  onKeyUp = e => {
    keyUps$.next(e.target.value);
  };

  render() {
    const { items } = this.state;
    return (
      <div>
        <h2>Example 02 Rxjs</h2>
        <h3>Auto Complete</h3>
        <input onKeyUp={this.onKeyUp} />
        <ul>
          {items.map(item => (
            <li>{item}</li>
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
