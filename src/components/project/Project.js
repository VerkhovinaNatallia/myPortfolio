import { NavLink } from 'react-router-dom';
import './style.css';


const Project = (props) => {
    return ( 
        <NavLink to={`/myPortfolio/project/${props.index}`}>
            <li className="project">
            
                <img src={props.img} alt={props.title} className="project__img"/>
                <h3 className="project__title">{props.title}</h3>
            
            </li>
        </NavLink>

     );
}
 
export default Project;