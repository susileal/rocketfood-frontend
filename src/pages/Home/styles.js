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
    
   
   
    
    #home{
    width: 112.0rem;
    height: 26.0rem ;
    display: flex;
    align-items: center;
    background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
    border-radius: 0.8rem;
    margin-top: 17.4rem;

   
    
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
    
    p{
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 1.6rem;
      
    }
  }
  }
  }

  @media (max-width: 768px) {
    main{
      margin: 0;
    
      #home{
   
      width: 37.6rem;
       height: 9rem ;
       margin-top: 4.4rem;
      
       
  
       img{
        width: 15rem;
        margin: 0 ;
        margin-left: 0;
       }
  
       div{
        margin-right: 3rem;
        padding: 0;
      
         h1{
            font-size: 1.4rem;
            margin-bottom: 0.3rem;
        }
    
        p{
            font-size: 1.1rem;
          
        }
  
        
       }
  
  
  
     }
    }


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

 

  @media (max-width: 768px) {
    background-color: #000A0F;
    padding: 1.2rem;
    

    
    

    

}

 

  
  
  
  
  `;





