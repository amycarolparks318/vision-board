import { NavLink } from "react-router";
import '../assets/sass/components/home.scss';

export default function Home(){
    return(
        <div>
            
            <nav className="home-nav">
             <div className="nav-box vision-box">
          <NavLink className="link vision" to="/vision">Vision Board</NavLink>
        <img src="src/assets/images/vision.png" alt="vision image" className="home-img" />
        </div> 
        <div className="nav-box todos-box">
        <NavLink className="link todo" to="/todo">To Dos</NavLink>
                  <img src="src/assets/images/books.png" alt="vision image" className="home-img" />
          </div>
          <div className="nav-box planner-box">
          <NavLink className="link planner" to="/planner">Planner</NavLink>
                  <img src="src/assets/images/girlguitar.png" alt="vision image" className="home-img" />
          </div>
          </nav>

        </div>
    );
};