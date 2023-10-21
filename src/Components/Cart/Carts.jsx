
// import { useEffect, useState } from "react";
// import { getAuth } from "firebase/auth";
// import app from "../../firebase/firebase.config";
// import { useLoaderData, useParams } from "react-router-dom";
// import MyCart from "./MyCart";

// const Cart = () => {
//   const auth = getAuth(app);
//   const { id } = useParams();
//   const item = useLoaderData();

//   const [userEmail, setUserEmail] = useState("");
//   console.log(item);

//   useEffect(() => {
//     if (auth.currentUser) {
//       setUserEmail(auth.currentUser.email);

//       fetch(`http://localhost:5000/cart/${id}`)
//         .then((response) => response.json())
//         .then((data) => {
//           console.log(data);
//           // Assuming 'data' is an array of cart items, you can set it to 'item'
//           // so that you can map over it in the render.
//           // item = data;
//         })
//         .catch((error) => console.error(error));
//     }
//   }, [auth, id]);

//   return (
//     <div>
//       <h1>Shopping Cart</h1>
//       {auth.currentUser ? (
//         <p>User Email: {userEmail}</p>
//       ) : (
//         <p>Please log in to see your cart.</p>
//       )}
//       <ul>
//         {item.map((element) => 
//           <MyCart key={element.id} element={element}></MyCart>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default Cart;


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
//             {/* Add other cart item details here */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Cart;















const Carts = () => {
  return (
    <div>
      
    </div>
  );
};

export default Carts;
