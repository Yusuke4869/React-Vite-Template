import "destyle.css";
import { StrictMode } from "react";
import "~/styles/global.scss";

import Router from "./routes";

import type { FC } from "react";

const App: FC = () => (
  <StrictMode>
    <Router />
  </StrictMode>
);

export default App;
