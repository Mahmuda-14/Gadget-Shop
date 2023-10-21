import sec4 from '../assets/Images/sec4.jpg'
import sec42 from '../assets/Images/sec42.jpg'
import sec43 from '../assets/Images/sec43.jpg'

const Section4 = () => {
    return (
       <div className=' mx-10'>
        <div>
            <h2 className=' items-center text-center text-3xl font-mono font-semibold'>Product Catagories</h2>
           
        </div>
        <hr  className='  mx-[32rem] my-10'/>
        <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-10 mt-20 '>
         <div className='w-[289px] h-[200px] mb-[123px]'>
            <div className='flex'>
                <img className='w-[144px] h-[137px] shadow-xl rounded-xl' src={sec4} alt="" />
                <h2 className='mt-[4px] ml-[35px] font-serif font-bold text-lg'>Premium Tech </h2>
                
                
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200 left-[148px] -top-[65px]">
                <div className="collapse-title text-xl font-medium">
                    View All
                </div>
                <div className="collapse-content">
                    <p>Premium Audio</p>
                    <p>Premium Cameras</p>
                    <p>Premium Laptops</p>
                    <p>Premium Phones</p>
                    <p>Premium Tablets</p>
                </div>
            </div>
        </div>
         <div className='w-[289px] h-[200px] mb-[123px]'>
            <div className='flex'>
                <img className='w-[144px] h-[137px] shadow-xl rounded-xl' src={sec42} alt="" />
                <h2 className='mt-[4px] ml-[35px] font-serif font-bold text-lg'>Wearable Technology </h2>
                
                
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200 left-[148px] -top-[65px]">
                <div className="collapse-title text-xl font-medium">
                    View All
                </div>
                <div className="collapse-content">
                    <p>Fitness Trackers</p>
                    <p>Galaxy Watches</p>
                    <p>Virtual Reality</p>
                    <p>Premium Phones</p>
                    <p>Watch Accessories</p>
                </div>
            </div>
        </div>
         <div className='w-[289px] h-[200px] mb-[123px]'>
            <div className='flex'>
                <img className='w-[144px] h-[137px] shadow-xl rounded-xl' src={sec43} alt="" />
                <h2 className='mt-[4px] ml-[35px] font-serif font-bold text-lg'>TV, Audio And Videos</h2>
                
                
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200 left-[148px] -top-[65px]">
                <div className="collapse-title text-xl font-medium">
                    View All
                </div>
                <div className="collapse-content">
                    <p>Amplifiers</p>
                    <p>Cables and Adapters</p>
                    <p>Cameras</p>
                    <p>Transmitters</p>
                    <p>Tv Keyboards</p>
                </div>
            </div>
        </div>

        
       </div>
       </div>
    );
};

export default Section4;