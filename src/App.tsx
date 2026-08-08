import { Component } from "./components/Container";
import { Heading } from "./components/Heading";
import { Logo } from "./components/Logo";

import "./styles/theme.css";
import "./styles/global.css";

export function App() {
  return (
    <>
      <Component>
        <Logo />
      </Component>
      <Component>
        <Heading>TIMER</Heading>
      </Component>
      <Component>
        <Heading>FORM</Heading>
      </Component>
      <Component>
        <Heading>FOOTER</Heading>
      </Component>
    </>
  );
}
