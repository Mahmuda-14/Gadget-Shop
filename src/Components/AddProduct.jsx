// import Swal from 'sweetalert2'
import sky from '../assets/Images/sky.jpg'

const AddProduct = () => {

    const handleAddProduct = event => {
        event.preventDefault();

        const form = event.target;

        const image = form.image.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        

        const product = { name, brand, type, price, description, rating, image }

        console.log(product);

        // send data to the server

        fetch('https://brand-ass-10-server-cubouic43-mahmuda-sultanas-projects.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
              console.log(data);
            })
    }

    return (
        <div>
            <div className=" p-24 bg-no-repeat bg-cover hero-overlay bg-opacity-60 " style={{ backgroundImage: `url(${sky}` }} >

                <h2 className="text-3xl text-white text-center  font-extrabold my-5">Add Product</h2>
                <form onSubmit={handleAddProduct} className=' bg-amber-50 rounded-xl p-8 my-5'>

                    
                    <div className="mb-8 ">
                        <div className="form-control w-full  ">
                            <label className="label">
                                <span className="label-text text-white">Image</span>
                            </label>
                          
                                <input type="text" name="image" placeholder="Image-URL" className="input input-bordered w-full " />
                          
                        </div>
                    </div>


                    {/* form name and brand row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            
                                <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" />
                           
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            
                                <input type="text" name="brand" placeholder="Brand Name" className="input input-bordered w-full" />
                          
                        </div>
                    </div>
                    {/* form type row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Type</span>
                            </label>
                            
                                <input type="text" name="type" placeholder="Type" className="input input-bordered w-full" />
                           
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            
                                <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                          
                        </div>
                    </div>
                    {/* form description and rating row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Short description</span>
                            </label>
                            
                                <input type="text" name="description" placeholder="Short description" className="input input-bordered w-full" />
                            
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            
                                <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                            
                        </div>
                    </div>
                    {/* form image url row */}

                    <input type="submit" value="Add Item" className="btn btn-block bg-orange-900 text-white" />

                </form>
            </div>
        </div>
    );
};

export default AddProduct;