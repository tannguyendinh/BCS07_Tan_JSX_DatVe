import React from "react";
import ReactDOM from "react-dom/client";
import DatVe from "./DatVe/DatVe";
import { Provider } from "react-redux";
import { store } from "./redux/Reducer/configStore";

// import HandleEvent from "./HandleEvent/HandleEvent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <Provider store={store}>
      <DatVe />
  </Provider>
);
