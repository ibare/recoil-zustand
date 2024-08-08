import React from 'react'
import styled from 'styled-components'

interface SearchItemProps {
  text: string
  color: string
}

export const SearchItem: React.FC<SearchItemProps> = ({ text, color }) => {

  return (
    <SearchItemContainer color={color}>{text}</SearchItemContainer>
  )

}

const SearchItemContainer = styled.div`
  display: inline-block;
  border: 2px solid ${({ color }) => color};
  padding: 10px;
`
