import { useState, useEffect, Component } from 'react';
import movieService from '../services/movieService';

function SeatsReservation(props) {

  const [ show, setShow ] = useState([]);
  const [ seats, setSeats ] = useState([]);
  const [ movie, setMovie ] = useState([]);
  const [ selectedSeats, setSelectedSeats ] = useState([]);

  const movieId = props.match.params.movieId;
  

  useEffect(() => {
    getAllShow();
    getAllSeats();
    getAllMovie();
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


  const getSeatData = (id, event) =>{ 
    const seat = seats.filter(s => {
      return s.id === id;
    })

    console.log(event.target.classList);
   // console.log(seat);

    if(selectedSeats.indexOf(seat[0]) == -1) {
      setSelectedSeats(arr => [...arr, seat[0]])
      event.target.classList.add('selected')
    }
    else{
      setSelectedSeats(selectedSeats.filter(item => item.id !== id))
      
      event.target.classList.remove('selected')
    }

 

    // if(!event.target.classList.contains('selected')){
    //   event.target.classList.add('selected')
    // }
    // else{
    //   event.target.classList.remove('selected')
    // }
    // console.log("selectedSeats");
    // console.log(selectedSeats);
    return seat;
  }



  return (
    <div className="page">
      <h2 style={{textAlign: 'center'}}>Seats Reservation</h2>

      <div className="">
        <div className="reserv-info">
          <div>Movie: {movie.name}</div>
          <div>Ticket price: </div>
        </div>

          <div className="screen">Screen</div>
          {
            seats.map(
              (seat) =>
              <div key = {seat.id} className="seats-row"> 
                    {/* <div>
                      {seat.number == 10 ? `${seat.number}\n\n` : seat.number}
                    </div> */}
                <div className="row">
                  {/* {seat.row} */}
                  <div className={seat.available ? `seat ${seat.id} ` : 'disabled'} onClick={(event) => (getSeatData(seat.id, event))} >
                    {seat.number}
                  </div>
                </div>
              </div>
            )
          }
          

            <div className="reserv-info">
              <div className="summary-item">
                Seats selected: {
                  selectedSeats.map(
                    s => <div key = {s.id}>{` seat: ${s.number} - row: ${s.row.toUpperCase()} ;`}</div>
                  )
                }
              </div>
              <div className="summary-item">
                Total: {}
              </div>
            </div>
            
            <div className="checkout-container">
              <button className="login-btn" style={{padding: "10px", borderRadius: "6px"}}>To checkout</button>
            </div>
          
            
        </div>
      </div>
  );
}

export default SeatsReservation;





