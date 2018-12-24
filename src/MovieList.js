import React, { Component } from 'react';
import Movie from './Movie';

class MovieList extends Component {
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
      <div>
        {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
