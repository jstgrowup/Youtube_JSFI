
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./store/store";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";

ReactDOM.hydrateRoot(
  document.getElementById("root"),
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
