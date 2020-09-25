import styled from "styled-components"

export const NavBarWrapper = styled.nav`
  grid-column: 2 / span 12;
  grid-row: 1 / 2;

  height: 55px;
  border-bottom: 2px solid ${props => props.theme.colors.dark3};
  padding: 0 20px;
  display: flex;
  justify-content: space-between;  

  
  img {
    height: 100%;
  }
`