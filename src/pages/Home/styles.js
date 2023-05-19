import styled from "styled-components";




export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 9.6rem 41.2rem auto 7.7rem;
  grid-template-areas:
  "header"
  "search"
  "content"
  "footer";
`;

export const Search  = styled.div`
    grid-area: search;
    display: flex;
    align-items: center;
    
    justify-content: space-between;
    background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
    border-radius: 0.8rem;
    margin: 17.2rem 12.4rem 0;
    padding-right: 10.1rem;
     
  >div{

    h1{
      font-size: 4.0rem;
      margin-bottom: 0.8rem;
      font-weight: 500;
    }

    span{
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 1.6rem;
      
    }
  }
    
    

`;

export const Content  = styled.div`
  overflow-y: auto;
  grid-area: content;
  padding: 0 12.4rem;
 
  
`;





