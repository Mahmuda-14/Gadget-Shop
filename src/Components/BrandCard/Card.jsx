
/* eslint-disable react/prop-types */


import { Link } from 'react-router-dom';

const Card = ({ element }) => {

    const {logoName, imageURL } = element;

    return (
        <div>
          <Link to={`/brands/${logoName}`}>
            <div className="card w-[14rem] shadow-xl  card-side bg-opacity-60 hero-overlay">
          

                <img src={imageURL} alt="" className="rounded-full w-[91px] h-[95px] p-3" />
                
                <div className="card-body ">
                    <h2 className="card-title">{logoName}</h2>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default Card;

