import { useLocation } from "react-router-dom"
import Paypal from "../components/Paypal"
import movieService from '../services/movieService';

function Checkout() {
  const location = useLocation()
  const selectedSeats = location.state?.selectedSeats
  const total = location.state.total

  const transactionSuccess = (selectedSeats) => {
    movieService.buyTicket(selectedSeats)
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
        
        
        <button style={{borderRadius: '20px', padding:'10px', marginBottom:'20px'}} className="login-btn"> Only reservation, payment in the cinema  </button>
      

        <Paypal 
          toPay={total} 
          onSuccess={transactionSuccess(selectedSeats)} 
        />
        
    </div>
  );
}
  
export default Checkout;