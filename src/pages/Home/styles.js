import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 9.6rem auto 7.7rem;
  grid-template-areas:
  "header"
  "content"
  "footer";

  > main{
    grid-area: content;

  }

  



  
 

  `;



export const Content  = styled.div`
  max-width: 138rem;
  
  grid-area: content;
  padding: 0 12.4rem;
  
  .inner{
    display: flex;
  }
  
  .carousel{
    cursor: grab;
    overflow: hidden;
  }

  > header{
    width: 112.0rem;
    height: 26.0rem ;
    display: flex;
    align-items: center;
    background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
    border-radius: 0.8rem;
    margin-top: 17.2rem;

   
    
    img{
      width: 58rem;
      margin-bottom: 13rem;
    }
    
    >div{
      margin-right: 10rem;
    
      
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
  }

  @media (max-width: 768px) {
    padding: 0 1.2rem;
   
    
   >header{
    width: 42.9rem;
     height: 8rem ;
     
     margin: 4.4rem 0;
     

     img{
      width: 16rem;
      margin-bottom: 3rem;
     }

     div{
      
    
    
       h1{
          font-size: 1.6rem;
          margin-bottom: 0.3rem;
      }
  
      span{
          font-size: 1.2rem;
        
      }
     }



   }

}

 

  
  
  
  
  `;





