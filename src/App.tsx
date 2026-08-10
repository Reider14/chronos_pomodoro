import { Component } from "./components/Container";
import { Logo } from "./components/Logo";

import "./styles/theme.css";
import "./styles/global.css";
import { Menu } from "./components/Menu";
import { ContDown } from "./components/countDown";

export function App() {
  return (
    <>
      <Component>
        <Logo />
      </Component>
      <Component>
        <Menu />
      </Component>
      <Component>
        <ContDown />
      </Component>
    </>
  );
}
