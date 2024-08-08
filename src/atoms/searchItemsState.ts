import { atom, selector } from 'recoil'

type SearchItem = {
  text: string
  color: string
}

export const searchItemsState = atom<SearchItem[]>({
  key: 'searchItemsState',
  default: [],
})

export const searchItemCountState = selector({
  key: 'searchItemCountState',
  get: ({ get }) => {
    const searchItems = get(searchItemsState)
    return searchItems.length
  }
})

export const addSearchItem = 
  (text: string, color: string) => 
  (prev: SearchItem[]) => [...prev, { text, color }]

