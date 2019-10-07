import React, { Component } from "react";
import Title from "./Title";
import List from "./List";

class Main extends Component {
  render() {
    return (
      <div>
        <Title title={'toDos'} />
        <List tasks = {['How the lawn', 'walk the dog']} />
        <List tasks = {['hose the driveway', 'finish the laundry']}/>
      </div>
    );
  }
}

// export default Main