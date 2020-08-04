import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import { Heading, HeadingContainer } from '../templates/Page'

export default () => (
  <Layout>
    <main id="main-content">
      <HeadingContainer>
        <Heading>No perskules</Heading>
      </HeadingContainer>
      <p>
        Kyseistä sivua ei löytynyt. Se on joko poistettu tai linkki on
        ollut virheellinen.
      </p>
      <p>Tarkistathan, että osoite selaimen osoiterivillä on oikein.</p>
      <Link to="/">Palaa etusivulle</Link>
    </main>
  </Layout>
)
