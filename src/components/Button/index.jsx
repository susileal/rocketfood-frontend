import { Container } from './styles'

export function Button({title, loading = false, children, isDelete, isSave, ...rest}){

  return(
  <Container 
    type="button"
    disabled={loading}
    isDelete={isDelete}
    isSave={isSave}
    {...rest}
    >
      {children}
      {loading ? 'Carregando...' : title}


  </Container>

  )
}