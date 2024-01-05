import pic1 from '../assets/Images/sec-3.jpg'
import pic2 from '../assets/Images/sec-32.jpg'
import pic3 from '../assets/Images/sec-33.jpg'
import pic4 from '../assets/Images/sec-34.jpg'
import pic5 from '../assets/Images/sec-35.jpg'

const Section3 = () => {
    return (
        <div>
            <div>
                <h3 className=' items-center text-center text-3xl font-mono font-semibold'>Top Rated Products</h3>
                <div className="sm:ml-[67px] sm:mr-[207px] sm:mt-[10px] lg:mx-[588px] lg:mt-[10px]" style={{ background: 'linear-gradient(to bottom right, #ff3e00, #ffbe30), #333333', paddingRight: '100px', height: '5px' }}></div>

            
            </div>
            
            

            <div className='grid sm:grid-cols-1 lg:grid-cols-5  gap-5 sm:mx-10 lg:mx-9 my-10 bg-orange-100 p-10 rounded-xl'>
            <div className="card w-[15rem] sm:ml-[100px]  lg:ml-0 h-[400px] bg-white  ">
                <img className='rounded-2xl' src={pic1} alt="" />
                <div className="card-body -mt-[44px] ">
                    <h2 className="card-title">
                        High Definition Web Camera Sharp X 59855 </h2>
                    <p>$230</p>

                </div>
            </div>

            <div className="card w-[15rem]  sm:ml-[100px]  lg:ml-0 h-[400px] bg-white  ">
                <img className='rounded-2xl' src={pic2} alt="" />
                <div className="card-body -mt-[44px]">
                    <h2 className="card-title">

                        Large Format 120mm f/5.6 Lens for VCC Pro  </h2>
                    <p>$890</p>

                </div>
            </div>

            <div className="card w-[15rem]  sm:ml-[100px]  lg:ml-0 h-[400px] bg-white  ">
                <img className='rounded-2xl' src={pic3} alt="" />
                <div className="card-body -mt-[44px]">
                    <h2 className="card-title">

                        Fixed-Wing Hybrid Surveillance Drone VV  </h2>
                    <p>$1450</p>

                </div>
            </div>

            <div className="card w-[15rem]  sm:ml-[100px]  lg:ml-0 h-[400px] bg-white  ">
                <img className='rounded-2xl' src={pic4} alt="" />
                <div className="card-body -mt-[44px]">
                    <h2 className="card-title">

                        Wireless Bluetooth Speaker GS-97 Multiple Colors  </h2>
                    <p>$500</p>

                </div>
            </div>

            <div className="card w-[15rem]  sm:ml-[100px]  lg:ml-0 h-[400px] bg-white  ">
                <img className='rounded-2xl' src={pic5} alt="" />
                <div className="card-body -mt-[44px]">
                    <h2 className="card-title">

                        Smartphone Premium Midnight Black GP-250  </h2>
                    <p>$770</p>

                </div>
            </div>

        </div>
        </div>
        
    );
};

export default Section3;