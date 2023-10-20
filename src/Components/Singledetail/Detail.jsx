/* eslint-disable react/prop-types */


const Detail = ({ detail }) => {

    const { image, description } = detail;


    return (

        <div>
            <div className="hero min-h-screen bg-orange-100">
                <div className="hero-content flex-col lg:flex-row gap-10">
                    <img src={image} className="w-[36rem] rounded-lg mr-10" />
                    <div className="flex flex-col justify-center">
                        <h1 className="text-3xl font-serif">{description}</h1>
                       
                        <button className="btn bg-orange-700 text-white items-center mx-52 my-5">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;


