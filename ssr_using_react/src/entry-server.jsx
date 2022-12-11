import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "./App";
import { store } from "./store/store";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
export function render() {
  const html = ReactDOMServer.renderToString(
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
  return { html };
}
