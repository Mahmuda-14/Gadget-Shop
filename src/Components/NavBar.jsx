import { NavLink } from 'react-router-dom';
import logo from '../assets/Images/logo1.png';

const NavBar = () => {
    const navlinks = (
        <ul className="flex sm:ml-[8.25rem] sm:mb-7 lg:m-5 text-xl">
            <li>
                <NavLink className="m-4 text-sky-600 hover:text-sky-600 hover:underline" to="/">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink className="m-4 text-sky-600 hover:text-red-600 hover:underline" to="/add">
                    Add Product
                </NavLink>
            </li>
            <li>
                <NavLink className="m-4 text-sky-600 hover:text-red-600 hover:underline" to="/cart">
                    My Cart
                </NavLink>
            </li>
        </ul>
    );

    return (
        <div className=' relative mx-10 mt-7'>
            <div className="navbar bg-amber-100 rounded-2xl">
                <div className="navbar-start w-4/5">
                    <img className="w-[111px] h-[76px]" src={logo} alt="" />
                  
                   <h2 className=" text-3xl font-serif ml-1 text-orange-700 " >SparkNest</h2>
                   
                   
                </div>
                <div className="navbar-end">{navlinks}</div>
            </div>
            <div>
            
            </div>
          
        </div>
    );
};

export default NavBar;



