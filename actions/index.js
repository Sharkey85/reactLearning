import axios from "axios";

const BASE_URL = 'http://localhost:3000';

const movieData = [];

const categoryData = [
    {id: 'c-1', name: 'drama'},
    {id: 'c-2', name: 'action'},
    {id: 'c-3', name: 'adventure'},
    {id: 'c-4', name: 'historical'}
]


export const getCategories = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(categoryData)
            // reject('Cannot Fetch Data!')
        }, 50)
    })
};


export const getMovies = () => {
    return axios.get(`${BASE_URL}/api/v1/movies`).then(res => res.data);
};


export const getMovieById = (id) => {
    return axios.get(`${BASE_URL}/api/v1/movies/${id}`).then(res => res.data)
};

export const createMovie = (movie) => {
    return axios.post(`${BASE_URL}/api/v1/movies`,movie).then(res => res.data)
};
