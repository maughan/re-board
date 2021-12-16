import styled from 'styled-components'

interface ContainerProps {
  width?: string
  height?: string
}

export const Container = styled.div<ContainerProps>`
  width: ${props => props.width ?? '100%'};
  height: ${props => props.height ?? '400px'};
  background-color: lightgrey;
`