import { Component } from "../../components/Container";
import { ContDown } from "../../components/countDown";
import { Form } from "../../components/form";
import { MainTemplate } from "../../components/template/templateMain";

export function Home() {
  return (
    <MainTemplate>
      <Component>
        <ContDown />
      </Component>

      <Component>
        <Form />
      </Component>
    </MainTemplate>
  );
}
