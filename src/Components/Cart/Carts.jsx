import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import NavBar from "../NavBar";



const Carts = () => {

  const all = useLoaderData();
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;
  // console.log(userEmail);
  const [filteredServices, setFilteredServices] = useState([]);




  const handleDelete = (id) => {
    console.log(id);
    const proceed = confirm('Are u Sure??')
    if (proceed) {
      fetch(`https://brand-ass-10-server-qnopig852-mahmuda-sultanas-projects.vercel.app/cart/${id}`, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);

          if (data.deletedCount > 0) {
            Swal.fire({
              title: 'Success!',
              text: 'Item Deleted Successfully',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
            const remaining = filteredServices.filter(bookings => bookings._id !== id);
            setFilteredServices(remaining);
          }




        })
    }

  }

  useEffect(() => {
    if (userEmail) {

      const userAssignments = all.filter((service) => service.email === userEmail);
      setFilteredServices(userAssignments);
    } else {

      setFilteredServices(all);
    }
  }, []);

  return (
    
    <div>
      <NavBar></NavBar>
      <div className="bg-no-repeat bg-cover " >
        <h2 className="text-2xl text-center m-8 p-5">My Items : {filteredServices.length}</h2>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">

            <thead className=" text-lg p-1">
              <tr>
                <th>

                </th>
                <th>Image</th>
                <th>Name</th>
                <th>Email</th>
                <th>Brand</th>
                <th>Type</th>

              </tr>
            </thead>
            <tbody>


              {filteredServices.map((assignment) => (<tr key={assignment._id}>
                <td>
                  <button onClick={() => handleDelete(assignment._id)} className="btn btn-sm btn-circle">


                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </td>

                <td>
                  <div className="avatar">
                    <div className="rounded w-24 h-24">
                      {assignment.image && <img src={assignment.image} alt="Avatar Tailwind CSS Component" />}
                    </div>
                  </div>
                </td>


                <td>{assignment.name}</td>
                <td>{assignment.email}</td>
                <td>{assignment.brand}</td>
                <td>{assignment.type}</td>

              </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Carts;









// import { useEffect, useState } from "react";
// import MyCart from "./MyCart";
// // import Swal from "sweetalert2";

// const Carts = () => {
//   const [cart, setCart] = useState([]);
 
  
 

//   useEffect(() => {
   
//     fetch('https://brand-ass-10-server-qnopig852-mahmuda-sultanas-projects.vercel.app/cart')
//       .then((response) => response.json())
//       .then((data) => {
//         setCart(data); 
//       })
//       .catch((error) => {
//         console.error("Error fetching cart data:", error);
        
//       });
//   }, [cart]);

//   // const handleDelete = (id) => {
//   //   console.log(id);
//   //   const proceed = confirm('Are u Sure??')
//   //   if (proceed) {
//   //     fetch(`https://brand-ass-10-server-qnopig852-mahmuda-sultanas-projects.vercel.app/cart/${id}`, {
//   //       method: 'DELETE'


//   //     })
//   //       .then(res => res.json())
//   //       .then(data => {
//   //         console.log(data);

//   //         if (data.deletedCount > 0) {
//   //           Swal.fire({
//   //             title: 'Success!',
//   //             text: 'Item Deleted Successfully',
//   //             icon: 'success',
//   //             confirmButtonText: 'Cool'
//   //           })
//   //           const remaining = filteredServices.filter(bookings => bookings._id !== id);
//   //           setFilteredServices(remaining);
//   //         }




//   //       })
//   //   }

//   // }

//   return (
//     <div>
//       <div className="grid sm:grid-cols-1 lg:grid-cols-3">
//         {cart.map((cart) => 
//           <MyCart key={cart._id} cart={cart}></MyCart>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Carts;