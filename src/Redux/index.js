import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import Reducers from "./Reducers";
import { encryptTransform } from "redux-persist-transform-encrypt";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["RX_AUTH",], // which reducer want to store
  transforms: [
    encryptTransform({
      secretKey: "J@NcRfUjXn2r4u7x!A%D*G-KaPdSgVkYp3s6v8y/B?E(J@NcRfUjXn2r4u7x!A%D*G-KaPdSgVkYp3s6v8y/B?EP",
      onError: function (error) {  console.error(error);},
    }),
  ],
};

const persist = persistReducer(persistConfig, Reducers);
const middleware = [thunk];
const composeEnhancers = typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(applyMiddleware(...middleware));
const store = createStore(persist, enhancer);
const persistor = persistStore(store);

export { persistor, store };
