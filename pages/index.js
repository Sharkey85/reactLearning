import React from 'react';
import SideMenu from "../components/sideMenu";
import Carousel from "../components/carousel";
import MovieList from "../components/movieList";
import {getCategories, getMovies} from "../actions/index"

const Home = (props) => {
    const { movies, categories,images} = props
    return (
        <div>
            <div className="home-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <SideMenu
                                categories={categories}
                                appName={"Movie DB"}/>
                        </div>
                        <div className="col-lg-9">
                            <Carousel images={images}/>
                            <div className="row">
                                <MovieList movies={movies || []}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
Home.getInitialProps = async () => {
    const movies = await getMovies()
    const categories = await getCategories()
    const images = movies.map(movie => ({
        id: `image-${movie.id}`,
        url: movie.cover,
        name: movie.name}));
    return {
        movies,
        categories,
        images
    }
};
export default Home