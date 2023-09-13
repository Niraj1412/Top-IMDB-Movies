// GlobalApi.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://movie-api-swagger-ui.onrender.com/api",
});


export const getAllMovies = () => {
  return axiosInstance.get('/movies');
};

export const getMovieListByGenreId = (id) => {
  return axiosInstance.get(`/movies?genres=${id}`);
};

