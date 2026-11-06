import React from "react";
import { createRoot } from "react-dom/client";
import "bulma/css/bulma.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./css/bulma-timeline.min.css";
import "./css/styles.css";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
