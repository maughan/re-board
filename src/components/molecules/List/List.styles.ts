import styled from 'styled-components'

interface ContainerProps {
  column?: boolean
  justify?: 'center' | 'left' | 'right'
  width?: string
  gap: number
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: ${props => props.column ? 'column' : 'row'};
  justify-content: ${props => props.justify ?? 'space-between'};
  width: ${props => props.width ?? '100%'};
  align-items: center;
  ${props => props.gap ? `gap: ${props.gap}px` : ''};
`