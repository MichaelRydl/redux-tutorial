import "./App.css";
import Counter from "./Counter";
import store from "./store";

function App() {
  return (
    <div className="App">
      <Counter store={store} />
    </div>
  );
}

export default App;
