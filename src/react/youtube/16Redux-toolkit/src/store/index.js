import { createStore } from "redux";

const INITIAL_VALUE = {
  counter: 5
};

const counterReducer = (store = INITIAL_VALUE, action) => {
  let newStore = store;
  if (action.type === "INCREMENT") {
    newStore = { counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    newStore = { counter: store.counter - 1 };
  } else if (action.type === "ADITION") {
    newStore = { counter: store.counter + action.payload.number };
  } else if (action.type === "MULTIPLY") {
    newStore = { counter: store.counter * action.payload.number };
  } else if (action.type === "ADD") {
    return { ...store, counter: store.counter + Number(action.payload.num) };
  } else if (action.type === "SUBTRACT") {
    return { ...store, counter: store.counter - Number(action.payload.num) };
  } else if (action.type === "PRIVACY_TOGGLE") {
    return { ...store, privacy: !store.privacy };
  }
  return newStore;
};

const counterStore = createStore(counterReducer);

export default counterStore;
