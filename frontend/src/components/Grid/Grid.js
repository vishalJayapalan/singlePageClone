import React, { useState } from 'react'
import GridRow from './GridRow'
import './Grid.css'

export default function Grid () {
  const [input, setInput] = useState(0)
  // let input = 5
  let arr = []
  for (let i = 0; i < input; i++) {
    arr[i] = []
    for (let j = 0; j < input; j++) {
      if (j % 2 !== 0) {
        arr[i][j] = input * (j + 1) - i
      } else {
        arr[i][j] = input * j + (i + 1)
      }
    }
  }
  // console.log(arr)
  // arr.forEach(array => console.log(array))

  return (
    <div className='gridOuterContainer'>
      <input
        placeholder='Enter the grid count'
        onChange={e => setInput(e.target.value)}
      />
      {arr.length > 0 && (
        <div className='gridsContainer'>
          {arr.map((array, index) => (
            <GridRow key={index} row={array} />
          ))}
        </div>
      )}
    </div>
  )
}
