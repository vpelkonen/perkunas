import React from 'react'
import styled from 'styled-components'

import COLORS from "../constants/colors"

const Footer = styled.footer`
  display: flex;
  padding: 1.5rem 0 0 0;
  max-width: 800px;
`

export default () => (
  <Footer>&copy; 2020 Perkunas ry</Footer>
)
