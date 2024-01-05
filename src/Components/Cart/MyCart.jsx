/* eslint-disable react/prop-types */

import { useState } from "react";
import Swal from "sweetalert2";


const MyCart = ({ cart }) => {

  const { _id, image, description } = cart;
  const [filteredServices, setFilteredServices] = useState([]);

  const handleDelete = (id) => {
    console.log(id);
    const proceed = confirm('Are u Sure??')
    if (proceed) {
      fetch(`http://localhost:5000/cart/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          if ((data.deletedCount) > 0) {
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


  return (
    <div>
      <div className="card card-compact w-96 h-[41rem] bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">

          <p>{description}</p>
          <div className="card-actions justify-end">
            <button onClick={() => handleDelete(_id)} className="btn bg-red-500 text-white">Delete</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default MyCart;