import { Outlet } from "react-router-dom";


import { useState, useEffect } from "react";
const Root = () => {
    const [theme, setTheme] = useState(null);

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
        }
        else {
            setTheme('light');
        }
    }, [])

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };
    return (
        <div>
          

            <div className=" bg-white dark:bg-black flex flex-col-reverse">
                <button className="bg-green-200 p-4 rounded-3xl ml-[40rem] mr-[40rem] mx-2" onClick={handleThemeSwitch}>
                    Dark Mode
                </button>
                <div>
                <Outlet></Outlet>
                </div>
                

            </div>
        </div>


    );
};
export default Root;






