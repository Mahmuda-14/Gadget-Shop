
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MyCart from "./MyCart";

const Carts = () => {
  const [cart, setCart] = useState([]);
  const { _id } = useParams();
  // const item = useLoaderData();

  useEffect(() => {
    // Fetch the productCarts based on the _id
    fetch('https://brand-ass-10-server-qnopig852-mahmuda-sultanas-projects.vercel.app/cart')
      .then((response) => response.json())
      .then((data) => {
        setCart(data); // Update the component state with fetched data
      })
      .catch((error) => {
        console.error("Error fetching cart data:", error);
        // Handle the error, e.g., show an error message to the user
      });
  }, [_id]);

  return (
    <div>
      <div className="grid grid-cols-3">
        {cart.map((cart) => 
          <MyCart key={cart._id} cart={cart}></MyCart>
        )}
      </div>
    </div>
  );
};

export default Carts;


