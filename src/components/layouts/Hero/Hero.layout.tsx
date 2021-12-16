import React from 'react'
import * as Styled from './Hero.styles'

interface Props {
  height?: string;
  width?: string;
  children?: JSX.Element | JSX.Element[]
}

export const Hero = (props: Props) => {
  const { width, height, children } = props

  return <>
    <Styled.Container
      width={width}
      height={height}
    >
      {children}
    </Styled.Container>
  </>
}