import { Component } from "./components/Container";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { ContDown } from "./components/countDown";

import { Footer } from "./components/Footer";

import "./styles/theme.css";
import "./styles/global.css";
import { Form } from "./components/form";

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
      <Component>
        <Footer />
      </Component>
    </>
  );
}
