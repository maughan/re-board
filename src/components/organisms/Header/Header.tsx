import React from 'react'
import * as Styled from './Header.styles'
import { TextButton, List, Text } from '../../'

export const Header = () => {
  return <>
    <Styled.Container>
      <Text>
        Reboard
      </Text>

      <List
        width={'40%'}
        justify={'right'}
        gap={40}
      >
        <TextButton
          text={'Store'}
          onClick={() => { }}
        />
        <TextButton
          text={'About us'}
          onClick={() => { }}
        />
        <TextButton
          text={'Cart'}
          onClick={() => { }}
        />
      </List>
    </Styled.Container>
  </>
}