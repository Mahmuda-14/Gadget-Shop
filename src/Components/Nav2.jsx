import { NavLink } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";
import { FaLock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useContext } from "react";


const Nav2 = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navlinks = <>

        <ul className="flex  sm:ml-[128px] sm:mb-10 lg:ml-[230px]">
            {
                user ?

                    <div className=" flex ">
                        <img className="mr-[21px] ml-[12px] w-10 rounded-full" src={user.photoURL} />
                        <p className="mx-1">{user.displayName}</p>
                        <button onClick={handleLogOut} className="btn -mt-[8px] mr-[22px] ">Sign Out</button>
                    </div>

                    :
                    <li className="flex gap-1 sm:ml-[113px]"><FaLock className="mt-[3px]"></FaLock> <NavLink className="mr-4 lg:-mt:[4px]" to='/login'>Login</NavLink></li>
            }


            <div style={{ background: 'linear-gradient(to bottom right, #ff3e00, #ffbe30), #333333', paddingRight: '3px', height: '18px', marginTop: '3px', marginLeft: '-5px', marginRight: '13px' }}></div>
            <li className="flex gap-1"><FaUser className="mt-[3px]"></FaUser> <NavLink className="mr-4  -mt:[4px]" to='/register'>Register</NavLink></li>
        </ul>

    </>
    return (
        <div>
            <div className="left-[831px] top-[58px] relative">
           

                {navlinks}

            </div>


        </div>
    );
};

export default Nav2;