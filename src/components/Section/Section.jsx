import React from 'react'
import { StSection } from '../../styles/Section.styles'

function Section({children}) {
  return (
    <StSection>{children}</StSection>
  )
}

export default Section