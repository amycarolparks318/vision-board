import { NavLink } from 'react-router';
import '../assets/sass/components/header.scss';

export default function Header(){
    return(
        <header>
          <div className='icon-box'>
            
                 <img src='src/assets/images/bear1.png' alt='todo icons' className='icon bear' /> 
                 <img src='src/assets/images/phone1.png' alt='todo icons' className='icon phone' />  
                 <img src='src/assets/images/icecream1.png' alt='todo icons' className='icon icecream' /> 
                 <img src='src/assets/images/hammer1.png' alt='todo icons' className='icon hammer' /> 
     
          </div>
                 <div className='h2-bg'>
          <h2>Dream big.</h2> 
          <h2>Set Goals.</h2> 
          <h2>Make plans.</h2>  
</div>  
          <img src='src/assets/images/todo_logo.png' alt='todo icon' className='banner2' />  
              
              <nav className="nav">
        <NavLink className="link-nav" to="/">Home</NavLink>
        <NavLink className="link-nav" to="/vision">Vision</NavLink>
        <NavLink className="link-nav" to="/todo">ToDo</NavLink>
        <NavLink className="link-nav" to="/planner">Planner</NavLink>
      </nav>
        </header>
      
    );
};