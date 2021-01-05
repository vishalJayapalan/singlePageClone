import React from 'react'

export default function GridRow ({ row }) {
  console.log(row)
  return (
    <div className='gridRowContainer'>
      {row.map((col, index) => (
        <div className='GridContainer'>
          <span>{col}</span>
          <hr className='bottomLine' />
        </div>
      ))}
    </div>
  )
}
