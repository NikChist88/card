import styled from 'styled-components'
import { Card } from './components/Card'

export const App = () => {
  return (
    <Wrapper>
      <Card />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`
