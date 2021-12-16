import React from 'react'
import * as Styled from './List.styles'

interface Props {
  children: JSX.Element[]
  justify?: 'left' | 'right' | 'center'
  width?: string
  column?: boolean
  gap: number
}

export const List = (props: Props) => {
  const { children, justify, width, column, gap } = props

  return <>
    <Styled.Container
      justify={justify}
      width={width}
      column={column}
      gap={gap}
    >
      {children}
    </Styled.Container>
  </>
}