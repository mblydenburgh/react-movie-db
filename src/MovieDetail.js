import React, { Component } from 'react';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';
import { Poster } from './Movie';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

class MovieDetail extends Component {
  state = {
    movie: {},
  }

  async componentDidMount() {
    try {
      const result = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=9e5490f28b6766a50f5ada44f356c759&language=en-US`);
      const movie = await result.json();
      this.setState({
        movie,
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { movie } = this.state;
    return (
      <MovieWraper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
        <MovieInfo>
          <Overdrive id={movie.id}>
            <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
          </Overdrive>
          <div>
            {this.state.movie.title ? (
              <h1>{movie.title}</h1>
            ) : (
              <h1>Loading...</h1>
            )}
            {/* <h1>{movie.title}</h1> */}
            <h3>{movie.release_date}</h3>
            <p>{movie.overview}</p>
          </div>
        </MovieInfo>
      </MovieWraper>
    );
  }
}

export default MovieDetail;

const MovieWraper = styled.div`
    position: relative;
    padding-top: 50vh;
    background: url(${props => props.backdrop}) no-repeat;
    background-size: cover;
`;

const MovieInfo = styled.div`
    background: white;
    text-align: left;
    padding: 2rem 10%;
    display: flex;
    > div {
        margin-left: 20px;
    }
    img{
        position: relative;
        top: -5rem;
        min-width:154px
    }
`;
