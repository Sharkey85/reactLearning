import React, {Component} from 'react';
import Link from 'next/link'

class MovieList extends Component {

    renderMovies() {
        const {movies} = this.props;
        return movies.map((movie) =>
            (
                <div key={movie.id} className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                        <Link href="/movie-app/pages/movies/%5Bid%5D.js" as={`/movies/${movie.id}`}>
                            <a><img className="card-img-top" src={movie.image} alt=""/></a>
                        </Link>
                        <div className="card-body">
                            <h4 className="card-title">
                                <Link href="/movie-app/pages/movies/%5Bid%5D.js" as={`/movies/${movie.id}`}>
                                    <a>{movie.name}</a>
                                </Link>
                            </h4>
                            {/*<h5>Release: {movie.release}</h5>*/}
                            <p className="card-text">{this.shorten(movie.description, 150)}</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">{movie.rating}</small>
                            {/*<small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>*/}
                        </div>
                    </div>
                </div>
            )
        )
    }

    shorten = (text, maxLength) => {
        if (text && text.length >= maxLength) {
            return text.substr(0, maxLength) + '...'
        }
        return text
    };

    render() {
        const {movies} = this.props
        return (
            <React.Fragment>
                {this.renderMovies()}
            </React.Fragment>
        )
    }
}

export default MovieList