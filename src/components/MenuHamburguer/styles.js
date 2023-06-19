import styled from "styled-components";

export const Container = styled.div`
  

header{
  margin: 0;
  padding: 4rem;
  width: 100%;
  height: 11.4rem;
  margin-bottom: 3.6rem;
  background-color: ${({ theme}) => theme.COLORS.BACKGROUND_700};
  h3{
    margin: 1.5rem 2rem;
    text-align: left;
    color: ${({theme}) => theme.COLORS.WHITE};
  }
}

/* Position and sizing of burger button */

.bm-burger-button {
  position: fixed;
  width: 1.6rem;
  height: 1.2rem;
  left: 4rem;
  top: 5rem;
 
}

/* Color/shape of burger icon bars */
.bm-burger-bars {
  position: fixed;
  background: white;
}

/* Color/shape of burger icon bars on hover*/
.bm-burger-bars-hover {
  background: white;
}

/* Position and sizing of clickable cross button */
.bm-cross-button {
  position: fixed;
  height: 1.2rem;
  width: 1.2rem;
  margin: 4.8rem 24rem 0 0;

}

/* Color/shape of close button cross */
.bm-cross {
  position: fixed;
  background-color: ${({theme}) => theme.COLORS.WHITE};
  
}

/*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
.bm-menu-wrap {
  position: fixed;
  height: 100%;
  left: 0;
  top: 0;
}

/* General sidebar styles */
.bm-menu {
  width: 39rem;
  background-color: #000A0F;
  font-size: 1.6rem;
  
}

/* Morph shape necessary with bubble or elastic */
.bm-morph-shape {
  fill: #373a47;
 
}

/* Wrapper for item list */
.bm-item-list {
  color: #b8b7ad;
  
}







`;

export const Content = styled.div`
width: 36rem;
padding: 3.6rem 1.8rem 49.8rem;

svg{
  margin-left: 1rem;
  width: 2rem;
}

input{
  padding: 1.2rem;
  font-size: 1.4rem;
  
}

.buttonMenu{
  width: 13.2rem;
  margin: 1.6rem 0 1rem;
  
}


.line{
  width: 34rem;
  height: 0;
  margin: 1rem 2rem 1rem 0;
  padding-right: 2rem;

  border: 1px solid #192227;
}



  
`;





