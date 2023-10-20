/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const SingleBrand = ({ product }) => {
    const { _id, name, brand, type, price, rating, image } = product;
    return (
        <div>

      <div className="swiper-pagination"></div>
            <div className="card w-96 h-[25rem] mb-[48px] border-solid border-2 border-indigo-600 p-5">
                <img className=" w-[13rem] h-[19rem] ml-[5rem] p-3 " src={image} alt="" />
                <div className="w-[332px] h-[138px] justify-center my-2">
                    <h2 className="card-title justify-center ">{name}</h2>
                    <div className="flex gap-5 m-2 justify-center ">
                        <h2 className=" ">Brand : {brand}</h2>
                        <p>Type : {type}</p>
                    </div>
                    <div className="flex gap-5 justify-center">
                        <p>Price : {price}</p>
                        <p>Rating : {rating}</p>
                    </div>

                    <div className="card-actions justify-center my-2 p-2">
                        <button className="btn bg-red-400 text-white">
                            <Link to={`/products/${_id}`}>Details</Link>
                        </button>


                        <Link to={`/update/${_id}`}><button className="btn bg-teal-200 ">Update</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBrand;