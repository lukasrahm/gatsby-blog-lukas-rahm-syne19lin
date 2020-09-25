import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { NavBarWrapper } from "../../elements"
import { Burger } from "../NavComponent"

export const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.svg" }) {
        publicURL
      }
    }
  `)

  return (
    <NavBarWrapper>
      <Link to="/">
        <img src={data.logo.publicURL} alt="Logo" />
      </Link>

      <Burger/>
    </NavBarWrapper>
  )
}
