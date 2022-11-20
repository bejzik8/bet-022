import styled from 'styled-components'

import { Heading, Table } from '../components'

export function StandingsPage() {
  return (
    <Container>
      <Heading rainbow marginBottom='20px'>
        Current Standings
      </Heading>
      <Table />
    </Container>
  )
}

const Container = styled.div``
