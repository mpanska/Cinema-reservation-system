import { useState, useEffect } from 'react';
import movieService from '../services/movieService';
import { Link } from "react-router-dom";
import AuthService from "../services/authService";

function SeatsReservation(props) {

  const [ show, setShow ] = useState([]);
  const [ seats, setSeats ] = useState([]);
  const [ movie, setMovie ] = useState([]);
  const [ selectedSeats, setSelectedSeats ] = useState([]);
  const [ ticketTypes, setTicketTypes ] = useState([]);

  const movieId = props.match.params.movieId;
  const currentUser = AuthService.getCurrentUser();

  useEffect(() => {
    getAllShow();
    getAllSeats();
    getAllMovie();
    getTicketTypes();
  }, []);


  const getAllMovie = async () => {
    await movieService.getMovie(movieId).then(
      response => setMovie(response.data)
    );
  } 

  const getAllShow = async () => {
    await movieService.getShow(movieId).then(
      response => setShow(response.data)
    );
  }

  const getAllSeats = async () => {
    await movieService.getShow(movieId).then(
      response => setSeats(response.data.seats)
    );
  }

  const getTicketTypes = async () => {
    await movieService.getTicketTypes().then(
      response => setTicketTypes(response.data)
    );
  }


  const getSeatData = (id, event) =>{ 
    const seat = seats.filter(s => {
      return s.id === id;
    })

    if(selectedSeats.indexOf(seat[0]) == -1) {
      setSelectedSeats(arr => [...arr, seat[0]])
      event.target.classList.add('selected')
    }
    else{
      setSelectedSeats(selectedSeats.filter(item => item.id !== id))
      event.target.classList.remove('selected')
    }
    return seat;
  }

  const calculateTotal = () => {
    var sum = 0

    for(let i = 0; i < selectedSeats.length; i++){
      if(localStorage.getItem('type') == 'normal'){
        sum += ticketTypes[0].price
      }
      else if(localStorage.getItem('type') == 'student'){
        sum += ticketTypes[1].price
      }
    }
    return sum
  }


  const getNextElem = (currentItem) => {
    const currentIndex = seats.indexOf(currentItem);
    const nextIndex = (currentIndex + 1) % seats.length;
    return seats[nextIndex];
  }
  
  const renderRows = () => {
    var rows = [];
    seats.forEach(seat => { if(!rows.includes(seat.row)) rows.push(seat.row) })

    var obj = {}
    rows.forEach(function(value) {
      var temp = []
      for(let i = 0; i < seats.length; i++){
        if(value === seats[i].row){
          temp.push(seats[i])
        }
      }
      obj[value] = temp;
    });

    return(
      <div className="">
        {
          rows.map((row) => 
          <div className={`row ${row}`} key={row}>
            <div className="row-name"> {row} </div>
            
            <div className="seats"> 
              {obj[row].map( 
                seat => (
                  <div 
                    className={seat.available ? `seat ${seat.id} ` : 'disabled'} 
                    onClick={(event) => (getSeatData(seat.id, event))}
                    style={seat.position + 2 == getNextElem(seat).position ? {marginRight: '40px'} : {}}
                  >
                    {seat.number}
                  </div>
                )
              )}
            </div>
          </div>
        )}
      </div>
    )
  }

  const handleSelectChange = (e) => {
    localStorage.setItem('type', e.target.value)
    window.location.reload();
  }


  return (
    <div className="page">
      <h2 style={{textAlign: 'center'}}>Seats Reservation</h2>

      <div className="">
        <div className="reserv-info">
          <div>Movie: {movie.name}</div>
          <div>Ticket price: {
              ticketTypes.map( 
                (ticket) => 
                <span key={ticket.id}>
                  <br/>{ticket.name} - {ticket.price}$ 
                </span> 
              )
            }<br/>
            <select value={localStorage.getItem('type')} onChange={(e) => (handleSelectChange(e))}>
              <option value="normal">Normal</option>
              <option value="student">Student</option>
            </select>
            </div>
        </div>

        <div className="screen">Screen</div>
        <div className="hall">{ renderRows() }</div>
        <div className="reserv-info">
          <div className="summary-item">
            Total: {calculateTotal()}$
          </div>
        </div>


        {currentUser ? (
          <div className="checkout-container" style={selectedSeats.length == 0?  {pointerEvents: 'none'} : {}} > 
            <Link  to={{
              pathname:"/checkout", 
              state:{ 
                selectedSeats: selectedSeats,
                total: parseInt(calculateTotal())
              }}
            }>
              <button className="login-btn" style={{padding: "10px", borderRadius: "6px"}}>To checkout</button>
            </Link>
          </div>
          ) : ( 
            <div className="checkout-container">
              <button className="login-btn" style={{padding: "10px", borderRadius: "6px", backgroundColor: 'gray'}}>You have to log in to reserve tickets</button>
            </div>
        )}
        </div>
      </div>
  );
}

export default SeatsReservation;