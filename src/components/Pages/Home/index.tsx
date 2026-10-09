import { Container } from "../../Container";
import { CountDwon } from "../../CountDwon";
import { Form } from "../../Form";
import { MainTemplates } from "../../Templates/MainTemplatest";

export function Home() {
  return (
    <>
      <MainTemplates>
        <Container>
          <CountDwon />
        </Container>
        <Container>
          <Form />
        </Container>
      </MainTemplates>
    </>
  );
}
