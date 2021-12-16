import React from 'react'
import * as Styled from './Text.styles'

interface Props {
  children: any
}

export const Text = (props: Props) => {
  const { children } = props

  return <>
    <Styled.Text>
      {children}
    </Styled.Text>
  </>
}