
import {skilsList} from './../../helpers/skilsList';
import './style.css';


const Skils = () => {
    
    return ( 
        <main className='skils'>
        <h1 className='skils__title'>Skils</h1>
        <ul className='skils__list'>
            {skilsList.map((prop)=>{
                return(
                    <li className='skils__item'>
                        <div className=''> {prop.sve}</div>
                        <div className='skils__name'>
                            <h3>{prop.name}</h3>
                            {prop.skils}
                        </div>
                    </li>
                )
            })}
        </ul>
        {/* <ul >
        {skilsList.map((skilsList,index)=>{
        return (
            <li key={index}>
                {skilsList.svg}
                <p>{skilsList.name}</p>
                {skilsList.skils}

        </li>
            
            )
    })
    }
        </ul>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="21" viewBox="0 0 32 21" fill="none">
                        <path d="M3.76 0.906616L16 13.1199L28.24 0.906616L32 4.66662L16 20.6666L0 4.66662L3.76 0.906616Z" fill="#737CA1"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="21" viewBox="0 0 32 21" fill="none">
                        <path d="M3.76 20.0933L16 7.87992L28.24 20.0933L32 16.3333L16 0.333252L0 16.3333L3.76 20.0933Z" fill="#737CA1"/>
                        </svg>
                </div> */}
     </main>           
     );
}
 
export default Skils;