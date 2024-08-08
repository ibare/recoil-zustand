import React from 'react'
import { useColors } from '../stores/useColors'

interface ColorsProps {

}

export const Colors: React.FC<ColorsProps> = () => {
  const colors = useColors(state => state.colors)
    
  return (
    <div>
      {colors.map((color, index) => (
        <div key={index} style={{ 
          backgroundColor: color, 
          display: 'inline-block',
          width: '50px', height: '50px' 
        }}></div>
      ))}
    </div>
  )
}
