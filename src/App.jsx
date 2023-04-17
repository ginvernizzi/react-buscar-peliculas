import { useState } from 'react'
import './App.css'
import ListMvoies from './components/ListMovies'
import FormMovies from './components/FormMovies'

function App () {
  const [films, setFilms] = useState([])

  return (
    <div className='App'>
      <div className='search_conatiner'>
        <h2>Buscador de peliculas</h2>
        <FormMovies setFilms={setFilms} />
        <ListMvoies films={films} />
      </div>
    </div>
  )
}

export default App
