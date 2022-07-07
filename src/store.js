import { createStore } from "redux";
import reducers from "./reducers";
import middleware from "./middleware";

export const setupStore = () => {
  return createStore(reducers, middleware);
};
