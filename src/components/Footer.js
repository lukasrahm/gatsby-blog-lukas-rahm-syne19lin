import React from "react"
import {useStaticQuery, graphql} from "gatsby"
import {
    FooterWrapper, 
    FooterSocialWrapper, 
    FooterSocialIcons,
    P
} from "../elements"

export const Footer = () => {

    const data = useStaticQuery(graphql`
        query {
            facebook: file(relativePath: {eq: "facebook.svg"}) {
                publicURL
            }
            linkedin: file(relativePath: {eq: "linkedin.svg"}) {
                publicURL
            }
            instagram: file(relativePath: {eq: "instagram.svg"}) {
                publicURL
            }
            twitter: file(relativePath: {eq: "twitter.svg"}) {
                publicURL
            }
        }
    `)


    return <FooterWrapper>
        <FooterSocialWrapper>
            <FooterSocialIcons>
                <a href="https://facebook.com/LukasRahm0/" target="_blank" rel="noopener noreferrer">
                    <img src={data.facebook.publicURL} alt="Facebook" />
                </a>
                <a href="https://www.linkedin.com/in/lukas-rahm-13570b139/" target="_blank" rel="noopener noreferrer">
                    <img src={data.linkedin.publicURL} alt="Linkedin" />
                </a>
                <a href="https://www.instagram.com/lukasrahm/" target="_blank" rel="noopener noreferrer">
                    <img src={data.instagram.publicURL} alt="Instagram" />
                </a>
                <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                    <img src={data.twitter.publicURL} alt="Twitter" />
                </a>
            </FooterSocialIcons>
            <P size="xSmall" color="dark3">© 2020 Lukas Rahm Company. All rights reserved.</P>
        </FooterSocialWrapper>
    </FooterWrapper>
}