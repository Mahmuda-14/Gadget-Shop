

/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Detail = ({ detail }) => {
    const { image, description } = detail;
     // Get the email from the route parameters

    const handleAdd = (event) => {
        event.preventDefault();


        const cartItem = {

            description: description,
            image: image,

        };

        fetch('https://brand-ass-10-server-qnopig852-mahmuda-sultanas-projects.vercel.app/cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cartItem)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                toast('Item added to cart');
            });
    }
    return (
        <div>
            <div className="hero min-h-screen bg-orange-100">
                <div className="hero-content flex-col lg:flex-row gap-10">
                    <img src={image} className="w-[36rem] rounded-lg mr-10" />
                    <div className="flex flex-col justify-center">
                        <h1 className="text-3xl font-serif">{description}</h1>
                       
                            <div>
                            <button onClick={handleAdd} className="btn bg-orange-700 text-white items-center mx-52 my-5">
                               <Link to='/'> Add to cart</Link>
                               
                            </button>
                           
                            </div>
                       
                    </div>

                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Detail;



