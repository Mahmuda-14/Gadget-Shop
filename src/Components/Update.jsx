

import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {

    const item = useLoaderData();
    const { _id, name, brand, type, price, rating, image } = item;

    const handleUpdateItem = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const brand = form.brand.value;

        const rating = form.rating.value;
        const type = form.type.value;
        const price = form.price.value;
        const image = form.image.value;

        const updatedItem = { name, brand, rating, type, price, image }

        console.log(updatedItem);

        // send data to the server
        fetch(`https://brand-ass-10-server-qnopig852-mahmuda-sultanas-projects.vercel.app/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if ((data.modifiedCount) > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Item Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }

            })
    }

    return (
        <div className=" bg-red-100 m-20 p-24">
            <h2 className="text-3xl font-medium items-center text-center my-5">{name}</h2>
            <form onSubmit={handleUpdateItem}>
                {/* form name and brand row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>

                        <input type="text" name="name" defaultValue={name} placeholder="Name" className="input input-bordered w-full" />

                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>

                        <input type="text" name="brand" defaultValue={brand} placeholder="Brand Name" className="input input-bordered w-full" />

                    </div>
                </div>
              
                {/* form type and price row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>

                        <input type="text" name="type" defaultValue={type} placeholder="Type" className="input input-bordered w-full" />

                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>

                        <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full" />

                    </div>
                </div>
                {/* form image url row */}
                <div className=" md:flex mb-8">
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>

                        <input type="text" name="image" defaultValue={image} placeholder="image URL" className="input input-bordered w-full" />

                    </div>

                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>

                        <input type="text" name="rating" defaultValue={rating} placeholder="Rating" className="input input-bordered w-full" />

                    </div>
                </div>
                <input type="submit" value="Update Item" className="btn btn-block bg-red-400 text-white" />

            </form>
        </div>
    );
};

export default Update;