import React from 'react';
import { connect } from 'react-redux';
import withGetDataFromWeb from '../hoc/with-getdata-from-web';
import { moviesRequested, moviesLoaded } from '../../actions/actions';
import Spinner from '../spinner/spinner';
import MovieDetailItem from '../data-detail/movie-detail-item';

class MovieDataList extends React.Component {
  getMovies = async () => {
    try {
      this.props.moviesRequested();
      let res = await this.props.getDatafromWeb.getDefaultMovies();
      return res;
    } catch (e) {
      throw e;
    }
  };

  getMoviesWithRange = async (from, to) => {
    if (from && to) {
      try {
        this.props.moviesRequested();
        let res = await this.props.getDatafromWeb.getFilmsWithRangeIds(
          from,
          to,
        );
        return res;
      } catch (e) {
        throw e;
      }
    } else {
      alert('Необходимо заполнить поля от и до!');
      return [{}];
    }
  };

  getMoviesList = (movies) => {
    return movies.map((movie) => {
      if (movie !== null) {
        return (
          <ul className="list-group">
            <li key={movie.filmId} className="list-group-item">
              <MovieDetailItem movie={movie} />
            </li>
          </ul>
        );
      }
      return;
    });
  };

  searchMoviesRange = (e) => {
    e.preventDefault();
    let x = document.getElementById('fromId').value;
    let y = document.getElementById('toId').value;
    this.getMoviesWithRange(x, y).then((res) => {
      this.props.moviesLoaded(res);
    });
  };

  render() {
    const { loading, moviesLoaded, movies } = this.props;

    if (loading) {
      return (
        <React.Fragment>
          <div className="loading-text">
            Идет загрузка фильмов...
            <Spinner />
          </div>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <div className="input-group" id="getmoviesblock">
          <div className="input-group-prepend">
            <span>От и до</span>
          </div>
          <input type="text" id="fromId" />
          <input type="text" id="toId" />

          <button
            id="btnGetFilms"
            onClick={this.searchMoviesRange}
            className="btn btn-info"
          >
            Получить фильмы по диапазону
          </button>
        </div>
        <div className="movies-list-block">{this.getMoviesList(movies)}</div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    loading: state.loading,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    moviesRequested: () => {
      dispatch(moviesRequested());
    },
    moviesLoaded: (moviesLoad) => {
      dispatch(moviesLoaded(moviesLoad));
    },
  };
};

export default withGetDataFromWeb(
  connect(mapStateToProps, mapDispatchToProps)(MovieDataList),
);
