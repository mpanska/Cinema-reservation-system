import { useLocation } from "react-router-dom"
import Paypal from "../components/Paypal"
import movieService from '../services/movieService';
import { Link } from "react-router-dom";

function Checkout() {
  const location = useLocation()
  const selectedSeats = location.state?.selectedSeats
  const total = location.state.total
  const price = location.state.price
  const showId = location.state.showId
  const ticketTypeId = location.state.ticketTypeId


  const ID = () => {
    let string =  '_' + Math.random().toString(36).substr(2, 30)
    return string
  }


  const handleReservation = () =>{
    selectedSeats.forEach(seat => {
      let data = [{
        "price": price,
        "showId": showId,
        "seatId": seat.id,
        "ticketTypeId": ticketTypeId
      }]

      movieService.reserveSeat(data).then(
        response => {console.log(response.data)},
        error => {console.log('error ' + error)}
      )
    });
  }

  const handleBuying = () =>{
    selectedSeats.forEach(seat => {
      let data = [{
        "price": price,
        "showId": showId,
        "seatId": seat.id,
        "ticketTypeId": ticketTypeId
      }]

      movieService.buyTicket(data).then(
        response => {console.log(response.data)},
        error => {console.log('error ' + error)}
      )
    });
  }



  return (
    <div className="page">
      <h2>Your seats:</h2>
      <div>
        <table className="ticket-table">
          <thead className="thead-dark">
            <tr>
              <th>Seat number</th>
              <th>Row</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {selectedSeats.map(( listValue, index ) => {
            return (
              <tr key={index}>
                <td>{listValue.number}</td>
                <td>{listValue.row}</td>
                <td>{price}</td>
              </tr>
            );
        })} 
          </tbody>
        </table>
      </div>


      <h3>Total: {total}$</h3>
        
      <Link to={{
        pathname:"/success", 
        state:{ 
          selectedSeats: selectedSeats,
          total: total,
          price: price,
          showId: showId,
          ticketTypeId: ticketTypeId,
          payed: false,
          ticketId: ID()
        }}}
      >
        <button onClick={handleReservation} style={{borderRadius: '20px', padding:'10px', marginBottom:'20px'}} className="login-btn"> Only reservation, payment in the cinema  </button>
      </Link>


      <Paypal 
        total={total} 
        state={{
          selectedSeats: selectedSeats,
          total: total,
          price: price,
          showId: showId,
          ticketTypeId: ticketTypeId,
          payed: true,
          ticketId: ID()
        }}
      />
    </div>
  );
}
  
export default Checkout;