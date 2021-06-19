import { useRef, useEffect } from "react"
import { useHistory} from "react-router-dom"
import movieService from '../services/movieService'

export default function Paypal(props) {
    const total = props.total;
    const selectedSeats = props.state?.selectedSeats
    const price = props.state.price
    const showId = props.state.showId
    const ticketTypeId = props.state.ticketTypeId
    const ticketId = props.state.ticketId
    const paypal = useRef()
    let history = useHistory()


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

    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                intent: "CAPTURE",
                purchase_units: [{
                    description: "Tickets",
                    amount: {
                        currency_code: "USD",
                        value: total,
                    },
                },],
            });
        },
        onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            handleBuying()

            history.push({
                pathname: "/success", 
                state: {
                    selectedSeats: selectedSeats,
                    total: total,
                    price: price,
                    showId: showId,
                    ticketTypeId: ticketTypeId,
                    ticketId: ticketId,
                    payed: true,
                    order: order
                }
            });
            window.location.reload();
        },
        onError: (err) => {
            console.log(err);
        },
      }).render(paypal.current);
    }, []);


    return (
        <div style={{width: '328px', height: '400px'}}>
            <div ref={paypal} style={{borderRadius: '20px'}}></div>
        </div>
    );
}