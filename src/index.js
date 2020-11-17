import React from "react";
import ReactDOM from "react-dom";
import "../public/bootstrap.min.css";
import "../public/main.css";
import "../static/main2.css";
import "../static/modals.css";
import "../static/popups.css";
import "../static/styles-pre.scss";
import 'semantic-ui-css/components/grid.css';
import 'semantic-ui-css/components/table.css';
import 'semantic-ui-css/components/icon.css';
import 'semantic-ui-css/components/menu.css';
import 'semantic-ui-css/components/rating.css';
import 'semantic-ui-css/components/dropdown.css';
import 'semantic-ui-css/components/button.css';
import 'semantic-ui-css/components/checkbox.css';
import App from "../src/components/app/app";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import { SProvider } from "./services/context-provider";
import GetDataFromWeb from "./services/service";
import { ErrorBoundry } from "./components/error-boundry";


const getDataFromWeb = new GetDataFromWeb();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <SProvider value={getDataFromWeb}>
        <Router>
          <App />
        </Router>
      </SProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById("root")
);

if (process.env.NODE_ENV === 'development') {
    window.getState = store.getState;
}
