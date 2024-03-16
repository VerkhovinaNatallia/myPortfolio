import { useParams } from 'react-router-dom';
import BtnGitHub from '../../components/btnGitHub/BtnGitHub';
import { projects } from '../../helpers/projectsList';



const Project = () => {
    const{id} = useParams();
    const project = projects[id];




    return ( 
        <main className="section">
        <div className="container">
            <div className="project-details">

               <a href={project.link}><h1 className="title-1">{project.title}</h1></a>
<a href={project.link}>
<img src={project.img} alt={project.title} className="project-details__cover"/>
    </a>

                <div className="project-details__desc">
                    <p>{project.skills}</p>
                </div>
                <BtnGitHub link={project.gitHubLink}/>
                {project.figma &&(
                    <a href={project.figma} className='project-figma'> 
                        Layout Figma
                   </a>     
                )}

            </div>
        </div>
    </main>
     );
}
 
export default Project;