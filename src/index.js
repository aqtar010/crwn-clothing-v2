import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { Elements } from "@stripe/react-stripe-js";

import App from "./App";
import { store } from "./store/store";
import { stripePromise } from "./utils/stripe/stripe.utils";
import "./index.scss";

const rootElement = document.getElementById("root");

render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate persistor={persistor}> */}
        <BrowserRouter>
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
        </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,
  rootElement
);
