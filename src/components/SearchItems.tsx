import React from 'react'
import styled from 'styled-components'
import { useRecoilValue } from "recoil"
import { searchItemsState } from '../atoms/searchItemsState'
import { SearchItem } from './SearchItem'

interface SearchItemsProps {

}

export const SearchItems: React.FC<SearchItemsProps> = () => {
  const searchItems = useRecoilValue(searchItemsState)

  return (
    <SearchItemsContainer>
      {searchItems.map((searchItem, index) => (
        <SearchItem key={index} text={searchItem.text} color={searchItem.color} />
      ))}
    </SearchItemsContainer>
  )
}

const SearchItemsContainer = styled.div`
  display: flex;
  gap: 10px;
  padding: 0 30px;
`
