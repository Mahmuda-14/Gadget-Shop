/* eslint-disable react/prop-types */
import { useLoaderData, useParams } from "react-router-dom";
import SingleBrand from "./SingleBrand";






import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import slide1 from '../../assets/Images/slider-photo-1.png';
import slide2 from '../../assets/Images/slider-photo-2.png';
import slide3 from '../../assets/Images/slider-photo-3.png';

const SingleBrands = () => {
  const allProducts = useLoaderData();
  const { brand } = useParams();

  const filteredProducts = allProducts.filter(product => product.brand === brand);





  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex ml-[19rem]">
            <img src={slide1} alt="" />

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex ml-[19rem]">
            <img src={slide2} alt="" />

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex ml-[19rem]">
            <img src={slide3} alt="" />

          </div>
        </SwiperSlide>
      </Swiper>

      {filteredProducts.length === 0 ? (<p className="items-center text-center text-lg font-semibold m-10">No Items Added yet,Sorry.</p>) :
        (<h2 className="items-center text-center text-lg font-semibold m-10"> Showing All For {filteredProducts.length} results
        </h2>)}
     
      <hr className=" mx-40 my-10" />
      <div className="grid grid-cols-2 gap-5 ml-[363px] mr-[150px] ">
        {filteredProducts.map(product =>
          <SingleBrand key={product._id} product={product} />
        )}
      </div>
    </div>
  );
};

export default SingleBrands;










