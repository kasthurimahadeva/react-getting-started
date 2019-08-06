function Button(props) {
  const handleClick = () => props.onClickFunc(props.increment);
	return (
    <button
      onClick={handleClick}>
      +{props.increment}
    </button>
  );
}

function Display(props) {
  return (
    <div>
      {props.message}
    </div>
  );
}

function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = (incrementValue) => setCounter(counter + incrementValue);
  return (
    <div>
      <Button onClickFunc={incrementCounter} increment={1} />
      <Button onClickFunc={incrementCounter} increment={5} />
      <Button onClickFunc={incrementCounter} increment={10} />
      <Button onClickFunc={incrementCounter} increment={20} />
      <Display message={counter} />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('mountNode'),
);