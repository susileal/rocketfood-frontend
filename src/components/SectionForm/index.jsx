import { Container } from "./styles";

export function SectionForm({ title, children}) {

  return (
    <Container>
      <h3> {title} </h3>
      {children}
    </Container>
  );
}