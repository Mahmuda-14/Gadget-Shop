

// import { useEffect } from "react";
// // import { getAuth } from "firebase/auth";
// // import app from "../../firebase/firebase.config";
// import { useLoaderData, useParams } from "react-router-dom";

// const Cart = () => {
//   // const auth = getAuth(app);
//   const { id } = useParams();

//   // const [userEmail, setUserEmail] = useState("");
//   // const [cartItems, setCartItems] = useState([]);
//   const item = useLoaderData();

//   useEffect(() => {
//     // if (auth.currentUser) {
//     //   setUserEmail(auth.currentUser.email);

//       fetch(`http://localhost:5000/cart/${id}`)
//         .then((response) => response.json())
//         .then((data) => {
//           console.log(data); // Log the data to check if it's correct
//           // setCartItems(data);
//         })
//         .catch((error) => {
//           console.error("Error fetching cart data", error);
//         });

//   }, [id]);

//   return (
//     <div>
//       <h1>Shopping Cart</h1>
//       {/* {auth.currentUser ? (
//         <p>User Email: {userEmail}</p>
//       ) : (
//         <p>Please log in to see your cart.</p>
//       )} */}
//       <ul>
//         {item.map((cartItem) => (
//           <li key={cartItem.id}>
//             <p>Product: {cartItem.description}</p>
//             {/* Add other cart itemCarts here */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Cart;













import { useEffect, useState } from "react";
// import Detail from "./Detail";
import { useLoaderData, useParams } from "react-router-dom";
import MyCart from "./MyCart";

const Carts = () => {
  const [detail, setDetail] = useState();
  const item =useLoaderData();

  const { id } = useParams();

  useEffect(() => {
    // Fetch the productCarts based on the _id
    fetch(`https://brand-ass-10-server-qnopig852-mahmuda-sultanas-projects.vercel.app/cart/${id}`)
      .then((response) => response.json())
      .then((data) => setDetail(data));
  }, [id]);




  return (
    <div>
      <div>

        {

          detail.map(element => <MyCart key={element.id} detail={element}></MyCart>)
        }
        
      </div>
    </div>
  );
};

export default Carts;

