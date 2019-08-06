function Button() {
  const [counter, setCounter] = useState(0);
  const handleClick = () => setCounter(counter + 1);
	return (
    <button
      onClick={handleClick}>
      {counter}
    </button>
  );
}

function Display() {
  return <div>...</div>
}

function App() {
  return (
    <div>
      <Button />
      <Display />
    </div>
  );
}

ReactDOM.render(
  // [<Button />, <Display />],

  // <div>
  //   <Button />
  //   <Display />
  // </div>,

  // <React.Fragment>
  //   <Button />
  //   <Display />
  // </React.Fragment>

  // <>
  //   <Button />
  //   <Display />
  // </>,

  <App />,
  document.getElementById('mountNode'),
);