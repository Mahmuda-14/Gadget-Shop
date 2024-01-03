import { Outlet } from "react-router-dom";

const Root = () => {
 
  
    return (
        <div>
          

            {/* <div className=" bg-white dark:bg-black flex flex-col-reverse">
            <input  type="checkbox" className="toggle" onClick={handleThemeSwitch} checked /> */}
                {/* <button className="bg-green-200 p-4 rounded-3xl ml-[40rem] mr-[40rem] my-8" onClick={handleThemeSwitch}>
                
                </button> */}
                {/* <div> */}
                <Outlet></Outlet>
                
        </div>


    );
};
export default Root;






