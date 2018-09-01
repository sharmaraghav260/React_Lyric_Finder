import React from 'react'
import spinner from './spinner.gif'

export default () => {
  return (
    <div>
      <img 
        src={spinner} 
        alt="Loading..."
        style={{width:'200px', margin:' 40ps auto', display:'block'}}
      />
    </div>
  )
}