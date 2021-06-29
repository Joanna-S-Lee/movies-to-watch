import React,{useState} from 'react'
import {Heading} from './Styled'
import NewMovieForm from './NewMovieForm'
import MovieList from './MovieList'

// const App = () => {
// 	const movies = [
// 		{
// 			name: "Sets",
// 			description: "A React version of the popular logic game"
// 		},
// 		{
// 			name: "Chore Tracker",
// 			description: "A full stack app to track chores completed and money earned"
// 		},
// 		{
// 			name: "James Bond movies",
// 			description: "The Daniel Craig ones"
// 		}
// 	]
// 	return (
// 		<div >
// 			<Heading>Movies and TV Shows to Watch</Heading>
// 			<NewMovieForm />
// 			<MovieList movies={movies} />
// 		</div>
// 	)
// }

const App = () => {
  const initialMovies = [
          {
              name: "Harry Potter (The series)",
              description: "The boy who lived"
          },
          {
              name: "Edge of Tomorrow",
              description: "Tom Cruise Groundhog's Day"
          },
          {
              name: "James Bond movies",
              description: "The Daniel Craig ones"
          }
  ]
  const [movies, setMovies] = useState(initialMovies)
  return (
    <div>
          <Heading>Movies and TV Shows to Watch</Heading>
          <NewMovieForm />
          <MovieList movies={movies} />

    </div>
  )
}

export default App;
