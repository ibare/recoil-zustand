import { create } from 'zustand'

interface State {
  colors: string[]
}

interface Actions {
  addColor: (color: string) => void
}

export const useColors = create<State & Actions>((set) => ({
  colors: [],
  addColor: color => set(state => {
    return {
      ...state,
      colors: [...state.colors, color]
    }
  })
}))
