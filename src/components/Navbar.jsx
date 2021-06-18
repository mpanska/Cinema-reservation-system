import logo from '../static/cinema-logo.png'
import { NavLink } from "react-router-dom";
import AuthService from "../services/authService";

function Navbar() {

  const currentUser = AuthService.getCurrentUser();

  return (
    <div className="Navbar">
      <div style={{display: 'flex'}}>
        <img src={logo} alt="cinema logo" className="logo"></img>
      
        <NavLink style={{margin: '20px'}} to='/'> Home </NavLink>
      </div>

      
        
        {currentUser ? (
          <NavLink to={"/profile"} className="nav-link">
            {currentUser.username}
          </NavLink>
          ) : ( 
            <NavLink to={"/log-in"} className="nav-link">
              Log in
            </NavLink>
          )}
      </div>
    ); 
}
  
export default Navbar;