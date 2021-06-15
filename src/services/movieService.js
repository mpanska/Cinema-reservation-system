import axios from 'axios'

const moviesURL = "http://localhost:8080/api/movies"

function getCurrentUser() {
    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user.jwt)

    return JSON.parse(localStorage.getItem('user'));
}

class movieService{

    getMovies(){
        return axios.get(moviesURL)
    }

    async getMovie(id){
        return await axios.get(`http://localhost:8080/api/movies/${id}`)
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

    // buyTicket(data){
    //     return axios.post(`http://localhost:8080/api/buyTicket`, data)
    // }

    async reserveSeat(data){
        return await axios.post(
            "http://localhost:8080/api/reserveTicket", data, {headers: {'Authorization': 'Bearer ' + getCurrentUser().jwt}}
        )
    }

}
export default new movieService()