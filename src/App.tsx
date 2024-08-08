import styled from 'styled-components'
import { Search } from './components/Search'
import { SearchItems } from './components/SearchItems'
import { Colors } from './components/Colors'

function App() {

  return (
    <Container>
      <Search />
      <SearchItems />

      <div className="color">
        <Colors />
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .color {
    display: flex;
    margin: 20px 20px;
    gap: 10px;
  }
`

export default App
