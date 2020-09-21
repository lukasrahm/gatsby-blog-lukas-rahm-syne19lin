import React from "react"
import { Container, FeatureImage, Content, ContentCard } from "../components"

const IndexPage = () => {
  return (
    <Container>
      <FeatureImage/>
      <Content>
        <ContentCard date="September 21, 2020" title="test-title" excerpt="test-excerpt" slug="/test" />
      </Content>
    </Container>
  )
}

export default IndexPage