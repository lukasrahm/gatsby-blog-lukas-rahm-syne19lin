import React from "react"
import styled from "styled-components"

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
    a {
      color: ${props => props.theme.colors.dark1};
      text-decoration: none;
    }
  }

  @media ${props => props.theme.breakpoints.tablet} {
    flex-flow: column nowrap;
    background-color: ${props => props.theme.colors.dark2};
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 20;
    li {
      border: solid 1px ${props => props.theme.colors.dark2};
      background-color: ${props => props.theme.colors.dark1};
      a {
        display: inline-block;
        padding: 18px 10px;
        color: ${props => props.theme.colors.light1};
        text-decoration: none;
      }
    }
  }
`

export const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/my-prefirst-post">Markdown</a>
      </li>
      <li>
        <a href="https://github.com/lukasrahm">Github</a>
      </li>
    </Ul>
  )
}
