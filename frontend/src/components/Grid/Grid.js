import React from 'react'

export default function Grid () {
  let input = 5
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
  console.log(arr)

  return <div></div>
}
