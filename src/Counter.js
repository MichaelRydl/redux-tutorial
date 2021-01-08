import React from "react";
import { connect } from "react-redux";

function Counter(props) {
  console.log("render", props);
  return (
    <div>
      <h1>I am a counter!</h1>
      <p>Count: {props.count}</p>
      <button onClick={props.onDecrementClick}>decrement</button>
      <button onClick={props.onIncrementClick}>increment</button>
      <div>
        <button onClick={props.onResetClick}>reset</button>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  console.log("mapStateToProps", state);
  return {
    count: state.count,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrementClick: () => {
      console.log("clickin");
      const action = { type: "INCREMENT" };
      dispatch(action);
    },
    onDecrementClick: () => {
      const action = { type: "DECREMENT" };
      dispatch(action);
    },
    onResetClick: () => {
      const action = { type: "RESET" };
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
