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

  console.log(location.state)

  // const transactionSuccess = (selectedSeats) => {
  //   movieService.buyTicket(selectedSeats)
  // }

  const handleReservation = () =>{

    selectedSeats.forEach(seat => {
      console.log(seat.id)
      let data = [{
        "price": price,
        "showId": showId,
        "seatId": seat.id,
        "ticketTypeId": ticketTypeId
      }]
      console.log(data);

      movieService.reserveSeat(data).then(
        response => {console.log(response.data)},
        error => {console.log('error ' + error)}
      )
    });
  }

  return (
    <div className="page">
      <h2>Your seats:</h2>
        {selectedSeats.map(
          seat => <div key={seat.id}> 
            Row: {seat.row} | Seat number: {seat.number}
            <br/>
          </div>
        )}
        <h3>Total: {total}$</h3>
        
        <Link  to={{
          pathname:"/success", 
          state:{ 
            selectedSeats: selectedSeats,
            total: total,
            price: price,
            showId: showId,
            ticketTypeId: ticketTypeId
          }}}
        >
          <button onClick={handleReservation} style={{borderRadius: '20px', padding:'10px', marginBottom:'20px'}} className="login-btn"> Only reservation, payment in the cinema  </button>
        </Link>
        {/* <Paypal 
          toPay={total} 
          onSuccess={transactionSuccess(selectedSeats)} 
        /> */}
    </div>
  );
}
  
export default Checkout;