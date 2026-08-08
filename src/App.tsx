import { Heading } from "./components/Heading";

import "./styles/theme.css";
import "./styles/global.css";
import { Timer } from "lucide-react";


export function App() {
  return (
    <>
      <Heading>
        Champions League 
        <button>
          <Timer />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
        necessitatibus sint voluptatibus, sunt rem non tenetur. Velit ex
        molestiae saepe voluptate, odit blanditiis nulla minima iure tempora ad
        ratione illum.
      </p>
    </>
  );
}
