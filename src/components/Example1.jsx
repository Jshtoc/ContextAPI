import PersonContext from "../contexts/PersonContext";

export default function Example1() {
  return (
    <PersonContext.Consumer>
      {/* PersonContext안에 있는 value랑 같은값이므로 persons라 해도 동일. */}
      {(persons) => (
        <ul>
          {persons.map((person) => (
            <li>{person.name}</li>
          ))}
        </ul>
      )}
    </PersonContext.Consumer>
  );
}
// function 컴포넌트와 class 컴포넌트에서 범용적으로 사용된다.
