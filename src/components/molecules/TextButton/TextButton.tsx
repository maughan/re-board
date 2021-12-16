import React from 'react'
import { Text } from '../..'
import * as Styled from './TextButton.styles'

interface Props {
  text: string
  onClick: () => void
}

export const TextButton = (props: Props) => {
  const { text, onClick } = props

  return <>
    <Styled.Container onClick={onClick}>
      <Text>{text}</Text>
    </Styled.Container>
  </>
}