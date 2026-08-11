import { Component } from "./components/Container";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { ContDown } from "./components/countDown";
import { Form } from "./components/form";

import "./styles/theme.css";
import "./styles/global.css";

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
      <Component>
        <Form />
      </Component>
    </>
  );
}
