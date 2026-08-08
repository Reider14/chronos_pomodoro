import { Component } from "./components/Component";
import { Heading } from "./components/Heading";

import "./styles/theme.css";
import "./styles/global.css";




export function App() {
  return (
    <>
      <Component><Heading>LOGO</Heading></Component>
      <Component><Heading>TIMER</Heading></Component>
      <Component><Heading>FORM</Heading></Component>
      <Component><Heading>FOOTER</Heading></Component>
    </>
  );
}
