import { Container } from "./styles";

export function Input({ icon: Icon, isBorder = false, isColor, children, ...rest }) {

  return (
    <Container
     isBorder={isBorder}
     isColor={isColor}
    >
      {children}
      {Icon && <Icon size={24}/>}
      <input {...rest}></input>
    </Container>
  );
}