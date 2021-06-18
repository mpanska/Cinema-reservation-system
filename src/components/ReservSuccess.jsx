import successIcon from '../static/icons-success.png'
import { useLocation } from "react-router-dom"
import movieService from '../services/movieService'
import { useState, useEffect, createRef } from 'react'
import Pdf from 'react-to-pdf'

function ResevSuccess(props) {   
  const location = useLocation()
  const selectedSeats = location.state?.selectedSeats
  const total = location.state.total
  const price = location.state.price
  const showId = location.state.showId
  const ticketTypeId = location.state.ticketTypeId
  const ticketId = location.state.ticketId
  const payed = location.state.payed
  const order = location.state.order

  const [show, setShow] = useState([])
  const [movie, setMovie] = useState([])


  // const payer = order.payer
  // const payerName = payer.name;

  const getPayer = () => {
    if(payed){
      const payer = order.payer
      return payer
    }
  }

  const getPayerName = () => {
    if(payed){
      const payerName = order.payer.name
      return payerName
    }
  }



  const documentRef = createRef()
  const options = {
    orientation: 'landscape'
  }

  useEffect(() => {
    getShow()
    getMovie()
  }, [])

  const getShow = async () => {
    await movieService.getShow(showId).then(
      response => setShow(response.data)
    )
  }

  const getMovie = async () => {
    await movieService.getMovie(showId).then(
      response => setMovie(response.data)
    )
  }



  
  return (
    <div className="page centered-content" >

      <div ref={documentRef} className="centered-content">
        <h2 style={{'textAlign': 'center'}}>Thank You for Your order!</h2>
        <img src={successIcon} ></img>
        <h2>Your tickets:</h2>
        <div>
          <table  class="ticket-table">
            <thead class="thead-dark">
              <tr>
                <th>Seat number</th>
                <th>Row</th>
                <th>Price</th>
                <th>Movie</th>
                <th>Date</th>
                <th>Time</th>
                <th>Ticket ID</th>
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
                <td>{show.date}</td>
                <td>{show.time}</td>
                <td>{ticketId}</td>
              </tr>
            );
          })} 
            </tbody>
          </table>
        </div>

        {payed ? 
        (
          <div className="centered-content">
            <h2>Order detail:</h2>
            <table  class="ticket-table">
              <thead class="thead-dark">
                <tr>
                  <th>ID</th>
                  <th>Status</th>
                  <th>Time</th>
                  <th>Email</th>
                  <th>Payer</th>
                  <th>Total</th>
                </tr>
            </thead>
            <tbody>
              {selectedSeats.map(( listValue, index ) => {  
              return (
                <tr key={index}>
                <td>{order.id}</td>
                <td>{order.status}</td>
                <td>{order.update_time}</td>
                <td>{getPayer().email_address}</td>
                <td>{getPayerName().given_name} {getPayerName().surname}</td>
                <td>{total}$</td>
                </tr>
              );
              }  )} 
            </tbody>
          </table>
          </div>
          )
          : 
          (
          <div className="centered-content">
            <h2>To pay in cinema: {total}$</h2>
          </div>
          )
        }
      </div>

      <Pdf targetRef={documentRef} filename="ticket.pdf" options={options} x={20} y={20}>
        {({toPdf}) => <button style={{padding: '10px', marginTop: '20px', borderRadius: '20px'}} className="login-btn" onClick={toPdf} onLoad={toPdf}>Download ticket</button>}
      </Pdf>
    </div> 
  );
}

export default ResevSuccess; 