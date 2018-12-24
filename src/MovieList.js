import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Movie from './Movie';

class MovieList extends PureComponent {
  state = {
    movies: [],
  }

  async componentDidMount() {
    try {
      const result = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=9e5490f28b6766a50f5ada44f356c759&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
      const movies = await result.json();
      console.log(movies);
      this.setState({
        movies: movies.results,
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <MovieGrid>
        {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} />)}
      </MovieGrid>
    );
  }
}

export default MovieList;

const MovieGrid = styled.div`
    display: grid;
    padding: 1rem;
    grid-template-columns: repeat(5,1fr);
    grid-row-gap: 1rem;
`;
