

const MyCart = ({ element }) => {

    const { image, description } = element;


    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <img src={image}alt="" />
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyCart;