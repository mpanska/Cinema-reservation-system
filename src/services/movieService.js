import axios from 'axios'

const moviesURL = "http://localhost:8080/api/movies"


class movieService{

    getMovies(){
        return axios.get(moviesURL)
    }

    getMovie(id){
        return axios.get(`http://localhost:8080/api/movies/${id}`)
    }

    async getShow(id){
        return await axios.get(`http://localhost:8080/api/showDetails/${id}`)
    }

}
export default new movieService()