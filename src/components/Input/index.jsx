import { Container } from "./styles";

export function Input({ icon: Icon, isBorder = false, isColor, ...rest }) {

  return (
    <Container
     isBorder={isBorder}
     isColor={isColor}
    
    >
      
      {Icon && <Icon size={24}/>}
      <input {...rest} />
    </Container>
  );
}