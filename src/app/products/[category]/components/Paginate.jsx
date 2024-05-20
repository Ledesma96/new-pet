import React from 'react'

const Paginate = ({page, setPage, prevPage, nextPage, totalPages}) => {
    const pages = []

    for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
    }

    const pagesPrev = pages.filter(pages => pages < page).slice(-4)
    const pagesNext = pages.filter(pages => pages > page).slice(0, 4)

    const anotherPage = (value) => {
        setPage(value)
    }

  return (
    <div className='paginate-container'>
        {prevPage && <button className='paginate-container_buttons' onClick={() => setPage(page - 1)}>Anterior</button>}

        {pagesPrev.map(page => (
            <button key={page} className='paginate-container_buttons' onClick={() => anotherPage(page)}>{page}</button>
        ))}

            <p className='paginate-container_p'>{page}</p>


        {pagesNext.map(page => (
            <button key={page} className='paginate-container_buttons' onClick={() => anotherPage(page)}>{page}</button>
        ))}

        {nextPage && <button className='paginate-container_buttons' onClick={() => setPage(page + 1)}>Siguiente</button>}
    </div>
  )
}

export default Paginate