import styled from "styled-components"

export const NavWrapper = styled.nav`
  grid-column: 2 / span 12;
  grid-row: 1 / 2;
  display: flex;
  align-items: center;

  width: 100%;
  height: 55px;
  justify-content: space-between;
  border-bottom: 2px solid ${props => props.theme.colors.dark3};

  img {
    height: 30px;
  }

  ul {
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
  }
  li{
    padding: 18px 10px;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`
