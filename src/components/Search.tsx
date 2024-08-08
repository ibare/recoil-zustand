import React from 'react'
import styled from 'styled-components'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { searchItemsState, searchItemCountState, addSearchItem } from '../atoms/searchItemsState'
import { generateRandomColor } from '../atoms/colorState'
import { useColors } from '../stores/useColors'

interface SearchProps {

}

export const Search: React.FC<SearchProps> = () => {
  const [search, setSearch] = React.useState<string>('')
  const setSearchItems = useSetRecoilState(searchItemsState)
  const searchItemCount = useRecoilValue(searchItemCountState)
  const addColor = useColors(state => state.addColor)

  const handler = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.currentTarget.value)
    },
    onEnter: (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        const newColor = generateRandomColor()
        addColor(newColor)
        
        setSearchItems(addSearchItem(search, newColor))
        setSearch('')
      }
    }
  }

  return (
    <SearchContainer>
      <div>
        <label>검색어 개수: <strong>{searchItemCount}</strong></label>
      </div>
      <div>
        <input type="text" placeholder="Search..." value={search} 
          onKeyDown={handler.onEnter} onChange={handler.onChange} />        
      </div>
    </SearchContainer>
  )
}

const SearchContainer = styled.div` 
  flex: 1;
  padding: 20px;

  div:first-child {
    font-size: 11px;
    color: #aaa;
    text-align: left;
    margin: 10px 5px;
  }

  input {
    width: 100%;
    font-size: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 12px;
  }
`

export default Search
