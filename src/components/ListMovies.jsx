import React from 'react'

const ListMovies = ({ films }) => {
  if (films === null) {
    return
  }

  return (
    <div className='list_movies'>
      {films.map((film) => {
        return (
          <div key={film.imdbID} className='movie'>
            <h3> {film.Title} </h3>
            <p> {film.Year} </p>
            <img src={`${film.Poster}`} alt='poster de la pelicula' />
          </div>
        )
      })}
    </div>
  )
}

export default ListMovies
