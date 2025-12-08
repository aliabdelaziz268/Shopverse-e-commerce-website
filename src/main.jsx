import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MainLayout from "./layout/MainLayout.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { store } from "./store/index.js";
import { Provider } from "react-redux";
import ScrollToTopButton from "./components/ScrollToTopButton.jsx";
import "./Style/min.css";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <MainLayout />
    </Provider>
    <ScrollToTopButton />
  </StrictMode>
);
