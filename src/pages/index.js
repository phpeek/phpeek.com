import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'


const Container = styled.div`
  text-align: center;
  color: #1F2041;
`

const Navigation = styled.nav`
  margin-top: 20px;
  font-size: 16px;

  a+a {
    margin-left: 2rem;
  }
`

const IndexPage = () => (
  <Container>
    <h1>Paweł Małolepszy</h1>
    <h2>Software Engineer @ <a href="https://www.pracujwunii.pl">Pracuj w Unii</a></h2>
    <Navigation>
      <Link to="/about-me">git log</Link>
      <Link to="/blog">blog</Link>
      <a href="mailto:pawel@phpeek.com">mail</a>
    </Navigation>
  </Container>
)

export default IndexPage
