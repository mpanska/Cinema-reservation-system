import { useState, useEffect } from 'react';
import movieService from '../services/movieService';
import { Link } from "react-router-dom";
import placeholder from '../static/img-placeholder.png'

function Home(props) {

  const [movies, setMovies ] = useState([]);

  useEffect(() => {
    movieService.getMovies().then((resp) => {
      setMovies(resp.data)
    });
  }, []);

  console.log(movies)

  return (
      <div className="page">
        <h1>Now playing</h1>

        <div className="now-playing">
          <div className="item">
            {
              movies.map(
                movie =>
                  <div key = {movie.id} className="card"> 
                    <img src={placeholder} alt="film-img" className="movie-image"/>
                    <div style={{fontSize: "18px", fontWeight: "bold", marginBottom: "10px"}}>
                      {movie.name}
                    </div>
                    <div style={{color: "gray"}}>
                      {movie.releaseDate}
                    </div>
                    <Link  to={`/movies/${movie.id}`}><div className="read-more">Read more</div></Link>
                  </div>
              )
            }
          </div>
            
        </div>
        {/* <h1>Coming soon</h1> */}
      </div>
  );
}

export default Home;