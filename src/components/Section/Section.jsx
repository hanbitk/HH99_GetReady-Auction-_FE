import React from 'react'
import { StSectionContainer, StSection } from '../../styles/Section.styles'

function Section({children, backgroundColor}) {
  return (
    <StSectionContainer backgroundColor={backgroundColor}>
        <StSection>{children}</StSection>
    </StSectionContainer>
  )
}

export default Section