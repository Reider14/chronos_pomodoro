import { Component } from "../../Container";
import { Footer } from "../../Footer";
import { Logo } from "../../Logo";
import { Menu } from "../../Menu";

type MainTemplateProps = {
  children: React.ReactNode;
};

export function MainTemplate({ children }: MainTemplateProps) {
  return (
    <>
      <Component>
        <Logo />
      </Component>

      <Component>
        <Menu />
      </Component>

      {children}

      <Component>
        <Footer />
      </Component>
    </>
  );
}
