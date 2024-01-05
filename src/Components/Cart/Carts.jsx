
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MyCart from "./MyCart";

const Carts = () => {
  const [cart, setCart] = useState([]);
  const { _id } = useParams();
 

  useEffect(() => {
   
    fetch('https://brand-ass-10-server-qnopig852-mahmuda-sultanas-projects.vercel.app/cart')
      .then((response) => response.json())
      .then((data) => {
        setCart(data); 
      })
      .catch((error) => {
        console.error("Error fetching cart data:", error);
        
      });
  }, [_id]);

  return (
    <div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-3">
        {cart.map((cart) => 
          <MyCart key={cart._id} cart={cart}></MyCart>
        )}
      </div>
    </div>
  );
};

export default Carts;


