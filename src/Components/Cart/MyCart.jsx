/* eslint-disable react/prop-types */


const MyCart = ({ cart }) => {

    const { image, description } = cart;


    return (
        <div>
            <div className="card  w-96 h-[300px] bg-base-100 shadow-xl">
                <img src={image}alt="" />
                <div className="card-body">
                    
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyCart;