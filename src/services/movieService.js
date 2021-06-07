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

    async getTicket(id){
        return await axios.get(`http://localhost:8080/api/tickets/${id}`)
    }

    async getTicketTypes(){
        return await axios.get(`http://localhost:8080/api/ticketTypes`)
    }

    buyTicket(data){
        return axios.post(`http://localhost:8080/api/buyTicket`, data)
    }

    reserveSeat(data){
        return axios.post(`http://localhost:8080/api/reserveTicket`, data)
    }

}
export default new movieService()