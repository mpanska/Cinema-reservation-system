import { useState, useEffect } from 'react';
import movieService from '../services/movieService';
import placeholder from '../static/img-placeholder.png'
import trailer from '../static/trailer-placeholder.png'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

function MoviePage(props) {

    const [movies, setMovies] = useState([])
    const movieId = props.match.params.movieId
    const [startDate, setStartDate] = useState(new Date());
    const [show, setShow] = useState([])

    useEffect(() => {
      getAllMovies();
      getAllShows();
    }, [])



  const getAllMovies = async () => {
    await movieService.getMovie(movieId).then(
      response => setMovies(response.data)
    )
   
  }

  const getAllShows = async () => {
    await movieService.getShow(movieId).then(
      response => setShow(response.data)
    );
  }
    
  console.log(movies)

    return (
      <div className="page">
        <div className="info-section">
          <div className="right-side">
            <img src={placeholder} alt="film-img" className="movie-details-image"/>
          </div>
          <div className="left-side">
            <div>{movies.name}</div>
            <hr/>
            <div>
              Director: {movies.director} | Duration: {movies.duration} | Release date: {movies.releaseDate}
            </div>
            <hr/>
            <div>{movies.description}</div>
            <hr/>
            <img src={trailer} alt="film-trailer" style={{width: "640px"}}/>
          </div>
        </div>


        <div className="buy-section">
          <h1>Buy ticket</h1>
          
          <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
          <div className="times">
            <Link to={`/reservation/${movieId}`}>
              <input className="time-item" type="button" value={show.time} />
            </Link>
          </div>

        </div>

      </div>
    );
}

export default MoviePage;