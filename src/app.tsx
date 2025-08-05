import { StrictMode } from "react";
import "./styles/global.css";

import { Router } from "./routes";

import type { FC } from "react";

export const App: FC = () => (
  <StrictMode>
    <Router />
  </StrictMode>
);
