import { Route, Switch } from "wouter";

import { Home } from "~/pages/home";

import type { FC } from "react";

export const Router: FC = () => (
  <Switch>
    <Route component={Home} path="/" />
    <Route>404, Not Found</Route>
  </Switch>
);
