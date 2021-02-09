import React from 'react'

export const Pagination = ({ projectsPerPage, totalProjects, paginate}) => {
  const pageNumbers = [];
  for( let i = 1; i<= Math.ceil(totalProjects / projectsPerPage); i++) {
    pageNumbers.push(i);
  }
  
 return (
    <div className="pagination">
    {
      pageNumbers.map( number => (
        <div onClick={() => paginate(number)} key={number} className="page_indicator">{number}</div>
      ))
    }
    </div>
  )
}
