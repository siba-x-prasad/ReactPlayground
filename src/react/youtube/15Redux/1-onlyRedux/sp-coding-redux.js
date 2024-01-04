const redux = require("redux");

const INITIAL_VALUE = {
  counter: 0
};

const reducer = (store = INITIAL_VALUE, action) => {
  console.log("Reducer Called ", action);
  let newStore = store;
  if (action.type == "INCREMENT") {
    newStore = { counter: store.counter + 1 };
  } else if (action.type == "DECREMENT") {
    newStore = { counter: store.counter - 1 };
  } else if (action.type == "ADITION") {
    newStore = { counter: store.counter + action.payload.number };
  } else if (action.type == "MULTIPLY") {
    newStore = { counter: store.counter * action.payload.number };
  }

  return newStore;
};

const store = redux.createStore(reducer);

const subscriber = () => {
  const state = store.getState();
  console.log(state);
};

store.subscribe(subscriber);

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "ADITION", payload: { number: 7 } });
store.dispatch({ type: "MULTIPLY", payload: { number: 2 } });
