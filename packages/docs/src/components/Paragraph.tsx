import React from 'react'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'


const Paragraph = props => <Typography variant="body1" color="textPrimary" {...props} />

const SpacedParagraph = styled(Paragraph)`
  word-break: break-word;
  ${({ theme }): string => `
    margin-bottom: ${theme.spacing(3)}px;
  `}
`

interface RemarkParagraphProps {
  children?: any
  rest?: object
}

export default Paragraph
export { SpacedParagraph }