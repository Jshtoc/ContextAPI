import React from "react";
import PersonContext from "../contexts/PersonContext";

export default class Example2 extends React.Component {
  // static contextType = PersonContext;
  // 여러개를 사용할 수 없다는게 단점.

  render() {
    const persons = this.context;
    return (
      <ul>
        {persons.map((person) => (
          <li>{person.name}</li>
        ))}
      </ul>
    );
  }
}

Example2.contextType = PersonContext;
