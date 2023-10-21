import { useEffect, useState } from "react";

import Card from "./Card";

const Cards = () => {
    const [element, setElement] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then((res) => res.json())
            .then((data) => setElement(data));
    }, [])
    return (
        <div className="sm:ml-[70px] lg:ml-0 " >
            <div className="items-center text-center m-9 " >

                <h2 className=" sm:-ml-[134px] lg:ml-0 text-4xl" data-aos="fade-right">Our Top Brands</h2>
                <div className="sm:ml-[67px] sm:mr-[207px] sm:mt-[10px] lg:mx-[588px] lg:mt-[10px]" style={{ background: 'linear-gradient(to bottom right, #ff3e00, #ffbe30), #333333', paddingRight: '100px', height: '5px' }}></div>

            </div>

            <div className="grid sm:grid-cols-1 lg:grid-cols-6 justify-evenly gap-10 mx-20 my-20 " >

                {

                    element.map(element => <Card key={element.id} element={element}></Card>)
                }
            </div>

        </div>



    );
};

export default Cards;



