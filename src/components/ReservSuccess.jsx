import successIcon from '../static/icons-success.png'
import { useLocation } from "react-router-dom"
import movieService from '../services/movieService'
import { useState, useEffect } from 'react'
import pdf from 'react-to-pdf'

function ResevSuccess() {   
  const location = useLocation()
  const selectedSeats = location.state?.selectedSeats
  const total = location.state.total
  const price = location.state.price
  const showId = location.state.showId
  const ticketTypeId = location.state.ticketTypeId
  
  const [movie, setMovie] = useState([])
  useEffect(() => {
    getMovie();
  }, [])

  const getMovie = async () => {
    await movieService.getMovie(showId).then(
      response => setMovie(response.data)
    )
  }

    return (
      <div className="prage centered-content">
        <h2 style={{'textAlign': 'center'}}>Thank You for Your order!</h2>
        <img src={successIcon} ></img>
        <h2>Your tickets:</h2>
        <div>
          <table  class="ticket-table">
            <thead class="thead-dark">
              <tr>
                <th>Nr.</th>
                <th>Seat number</th>
                <th>Row</th>
                <th>Price</th>
                <th>Movie</th>
              </tr>
            </thead>
            <tbody>
              {selectedSeats.map(( listValue, index ) => {
              return (
                <tr key={index}>
                <td>{listValue.number}</td>
                <td>{listValue.row}</td>
                <td>{price}</td>
                <td>{movie.name}</td>
              </tr>
            );
          })} 
            </tbody>
          </table>
        </div>
      </div> 
    );
}

export default ResevSuccess; 