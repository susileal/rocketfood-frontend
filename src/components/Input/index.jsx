import { Container } from "./styles";

export function Input({ icon: Icon, isBorder = false, ...rest }) {

  return (
    <Container
     isBorder={isBorder}
    
    >
      {Icon && <Icon size={24}/>}
      <input {...rest} />
    </Container>
  );
}