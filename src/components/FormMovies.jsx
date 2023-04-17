import React, { useState } from 'react'
import { useQuery } from 'react-query'

const API_FILM_URL = 'https://www.omdbapi.com/?apikey=db986322&s='

const FormMovies = ({ setFilms }) => {
  const [movie, setMovie] = useState('')

  const getMovies = (word) => {
    fetch(`${API_FILM_URL}${word}&`)
      .then((resp) => resp.json())
      .then((data) => setFilms(data.Search))
  }

  const onHandleChange = (e) => {
    setMovie(e.target.value)
  }

  const onHandleSearch = (e) => {
    e.preventDefault()
    const word = e.target.movie.value
  }

  return (
    <form onSubmit={onHandleSearch} className='movie_form'>
      <input type='text' name='movie' value={movie} onChange={onHandleChange} />
      <button onSubmit={onHandleSearch}>Buscar</button>
    </form>
  )
}

export default FormMovies
