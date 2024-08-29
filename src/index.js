import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store/store";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51NqbIGBttcRVBy3MwV4MMspboHMdvvrkmzx460Y78zWbDYmdxYnHq1b3AH3u24cQbPMQeapqKGNvJlOaZD91O0Ji00YeearX1u"
);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </PersistGate>
  </Provider>,

  document.getElementById("root")
);
