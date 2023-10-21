import { Link } from 'react-router-dom'
import err from '../src/assets/Images/404.gif'
const ErrorPage = () => {
    return (
        <div className='items-center ml-[300px]'>
            <img src={err} alt="" />
            
            <Link to ="/"><button className="btn ml-[21rem] text-black bg-red-200">Go BAck to home</button></Link>
      
        </div>
    );
};

export default ErrorPage;