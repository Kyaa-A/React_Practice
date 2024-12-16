import Conditional from "./components/Conditional";
import Fruits from "./components/Fruits";
import Hello from "./components/Hello";
import Message from "./components/mESSAGE.JSX";
import Counter from "./components/Counter";

function App() {
  const seatNumbers = [1, 4, 7];

  return (
    <div className="App">
      {/* <Hello
        name="Asnari"
        message="How you doing?"
        emoji="😊"
      /> */}

      <Counter />
    </div>
  );
}

export default App;
