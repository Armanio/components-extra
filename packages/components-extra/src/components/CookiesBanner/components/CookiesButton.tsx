import React from 'react'
import styled from 'styled-components'
import { Button, ButtonProps } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(({ palette }) => ({
  label: {
    wordBreak: 'break-word',
    color: palette.primary.contrastText,
    borderColor: palette.primary.contrastText,
  },
}))

const CookiesButton: CookiesButtonType = ({ className, href, ...rest }: ButtonProps) => {
  const classes = useStyles()

  return (
    <Button
      className={`${className} ${classes.label}`}
      href={href}
      role={href ? 'link' : 'button'}
      size="small"
      variant="outlined"
      {...rest}
    />
  )
}

CookiesButton.displayName = 'CookiesBanner.Button'

export type CookiesButtonType = React.FunctionComponent<ButtonProps>
export default styled(CookiesButton)``