/* eslint-disable */
// ---------------------------------------------------------------------------------------------- //
// Incorrect
if (condition) {
  useEffect(() => {
    // do something
  }, []);
}

// Correct
useEffect(() => {
  if (condition) {
    // do something
  }
}, [condition]);
// ---------------------------------------------------------------------------------------------- //
// Incorrect
const [count, setCount] = useState(0);
useEffect(() => {
  setCount(1);
}, []);

// Correct
const [count, setCount] = useState(1);
// ---------------------------------------------------------------------------------------------- //
// Incorrect
useEffect(() => {
  console.log('This will run after every render');
});

// Correct
useEffect(() => {
  console.log('This will run once on mount and unmount');
}, []);
// ---------------------------------------------------------------------------------------------- //
// Incorrect
const inputRef = useRef();
inputRef.current.focus();

// Correct
const inputRef = useRef();
useEffect(() => {
  inputRef.current.focus();
}, []);
// ---------------------------------------------------------------------------------------------- //
// Incorrect
const [count, setCount] = useState(0);
useEffect(() => {
  console.log(`Count is ${count}`);
}, [count, setCount]); // setCount doesn't need to be a dependency

// Correct
const [count, setCount] = useState(0);
useEffect(() => {
  console.log(`Count is ${count}`);
}, [count]); // Only real dependencies included