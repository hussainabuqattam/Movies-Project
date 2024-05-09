import React from 'react'
import { Pagination } from 'react-bootstrap'

export const Paginations = () => {
  return (
    <div className='Paginations_style'>
     <Pagination>
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
     </Pagination>
    </div>
  )
}
