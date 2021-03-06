import React from 'react'

export default function GridRow ({ row, input }) {
  return (
    <div
      className='gridRowContainer'
      style={{ height: `calc(20em / ${input})` }}
    >
      {row.map((col, index) => (
        <div
          className='gridContainer'
          style={{ width: `calc(100% / ${input})` }}
        >
          <span
            className='gridNumber'
            style={{ fontSize: `calc(700% /${input})` }}
          >
            {col}
          </span>
        </div>
      ))}
    </div>
  )
}
