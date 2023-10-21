/* eslint-disable react/prop-types */


const MyCart = ({ cart }) => {

    const { image, description } = cart;


    return (
        <div>
            <div className="card card-compact w-96 h-[41rem] bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-red-500 text-white">Delete</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyCart;