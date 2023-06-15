import styled from "styled-components";

export const Container = styled.div`
  width: 30.4rem;
  height: 48rem;
  padding: 2.4rem;
  border-radius: 0.8rem;
  margin-right: 2.7rem;  
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
  border: 1px solid #000204;
  text-align: center;
  box-shadow: 20px 20px 10px ${({theme}) => theme.COLORS.BACKGROUND_800};
 
  

  > section{
    svg{
      font-size: 2.4rem;
      color: ${({theme}) => theme.COLORS.WHITE};
      margin-left: 24.0rem;
      
    }
  }

  
  
    img{
      width: 17.6rem;   
    }

    h3{
      font-size: 2.4rem;
      color: ${({theme}) => theme.COLORS.WHITE_100};
      margin: 1.5rem 0;

      svg{
        font-size: 1.6rem;
      }
    }

    
  
    p{
      font-size: 1.4rem;
      font-family: 'Roboto';
      color: ${({theme}) => theme.COLORS.GRAY_300};
      margin-bottom: 1.5rem;
  
    }
  
    span{
      font-size: 3.2rem;
      font-family: 'Roboto';
      color: ${({theme}) => theme.COLORS.BLUE};
    }
  
  .user{
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 0 4.8rem;
    margin-top: 1.5rem;
  
}

@media (max-width: 768px) {
    width: 21.0rem;
    height: 29.8rem ;
   

    > section{
      svg{
        font-size: 1.6rem;
        margin-left: 15.0rem;
        
      }

      
    }
    img{
      width: 8.8rem;   
    }

  h3{
    font-size: 1.2rem;
    color: ${({theme}) => theme.COLORS.WHITE_100};
    margin: 1.5rem 0;

    svg{
      font-size: 1.2rem;
    }
  }
  
  p{
    display: none;

  }

  span{
      font-size: 1.6rem;
     
    }
   
    .user{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 0.6rem;
      
      
      button{
        width: 16.2rem;
        height: 3.2rem;
        font-size: 1.4rem;
        margin-top: 0.8rem;
        padding: 0.4rem;
    }
  
}
    }


`;