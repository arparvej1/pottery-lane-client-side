import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward, IoIosCalendar } from "react-icons/io";
import AllArtCraftItemsCard from "../AllCrafts/AllArtCraftItems/AllArtCraftItemsCard";
import AllCategoryCard from "../AllCrafts/AllCategory/AllCategoryCard";

const Home = () => {
  const { apiURL } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  const subCategory = [...new Set(items.map(val=>val.subCategory))]
    
  useEffect(() => {
    fetch(`${apiURL}/art-craft`)
      .then(res => res.json())
      .then(data => {
        setItems(data)
      })
  }, [])

  return (
    <>
      <Helmet>
        <title> Home | PotteryLane </title>
      </Helmet>
      {/* ---------- slider banner start ------------ */}
      <div className='mb-10 mt-5'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          navigation={true}
          modules={[Autoplay, Navigation, Pagination]}
          className="mySwiper">
          <SwiperSlide>
            <div className="w-full">
              <div className='relative'>
                <img src="https://bw-craftxtore.bzotech.com/demo2/wp-content/uploads/2023/09/item-slider-home2-2.webp" className="w-full lg:h-[600px]" />
                <div className='absolute md:top-32 md:left-32 lg:top-48 lg:left-48 text-white bg-[#00000071] p-10 rounded-2xl flex flex-col gap-3'>
                  <h3 className='text-3xl  font-medium '>Tranquil Suburban Retreat</h3>
                  <h3 className='text-xl font-semibold'>Price: $3,000/month</h3>
                  <div className='flex gap-2 items-center'>
                    <span><FaMapMarkerAlt /></span>
                    <span>Suburbia Haven</span>
                  </div>
                  <div className='flex'>
                    <Link className='btn btn-primary' to='/apartments-details/2'>View Details</Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full">
              <div className='relative'>
                <img src="https://bw-craftxtore.bzotech.com/demo2/wp-content/uploads/2023/09/item-slider-home2-1.webp" className="w-full lg:h-[600px]" />
                <div className='absolute md:top-32 md:left-32 lg:top-48 lg:left-48 text-white bg-[#00000071] p-10 rounded-2xl flex flex-col gap-3'>
                  <h3 className='text-3xl  font-medium '>Modern Beachfront Condo</h3>
                  <h3 className='text-xl font-semibold'>Author: Sophie Carter</h3>
                  <div className="flex gap-2">
                    <IoIosCalendar className='text-2xl' />
                    <span>
                      June 10, 2023
                    </span>
                  </div>
                  <div className='max-w-96'>
                    <p>
                      Experience beachfront luxury in this modern condo overlooking the ocean. With sleek design,
                    </p>
                    <p>
                      <Link to={`/blog-details/9-Modern-Beachfront-Condo`} className='flex gap-1 items-center text-[#1266e3] font-semibold'><span>Continue</span> <IoIosArrowRoundForward className='text-3xl' /></Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full">
              <div className='relative'>
                <img src="https://bw-craftxtore.bzotech.com/demo2/wp-content/uploads/2023/09/item-slider-home2-2.webp" className="w-full lg:h-[600px]" />
                <div className='absolute md:top-32 md:left-32 lg:top-48 lg:left-48 text-white bg-[#00000071] p-10 rounded-2xl flex flex-col gap-3'>
                  <h3 className='text-3xl  font-medium '>Family-Friendly Suburban Home</h3>
                  <h3 className='text-xl font-semibold'>Price: $320,000</h3>
                  <div className='flex gap-2 items-center'>
                    <span><FaMapMarkerAlt /></span>
                    <span>Suburbia Meadows</span>
                  </div>
                  <div className='flex'>
                    <Link className='btn btn-primary' to='/apartments-details/6'>View Details</Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full">
              <div className='relative'>
                <img src="https://bw-craftxtore.bzotech.com/demo2/wp-content/uploads/2023/09/item-slider-home2-1.webp" className="w-full lg:h-[600px]" />
                <div className='absolute md:top-32 md:left-32 lg:top-48 lg:left-48 text-white bg-[#00000071] p-10 rounded-2xl flex flex-col gap-3'>
                  <h3 className='text-3xl  font-medium '>Rustic Mountain Cabin Retreat</h3>
                  <h3 className='text-xl font-semibold'>Author: William Johnson</h3>
                  <div className="flex gap-2">
                    <IoIosCalendar className='text-2xl' />
                    <span>
                      May 15, 2023
                    </span>
                  </div>
                  <div className='max-w-96'>
                    <p>
                      Experience the serenity of nature in this rustic mountain cabin retreat. Surrounded by towering pines and majestic peaks,
                    </p>
                    <p>
                      <Link to={`/blog-details/6-Rustic-Mountain-Cabin-Retreat`} className='flex gap-1 items-center text-[#1266e3] font-semibold'><span>Continue</span> <IoIosArrowRoundForward className='text-3xl' /></Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* ---------- slider banner End ------------ */}
      {/* ------------- art & craft items start --------------- */}
      <div className="max-w-screen-xl mx-5 xl:px-5 2xl:px-0 xl:mx-auto">
        < h3 className="font-semibold text-xl md:text-2xl lg:text-3xl text-base-content mx-auto text-center">Art & Craft Items</h3>
        <p className="my-5 text-center md:w-2/3 mx-auto">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, accusantium impedit voluptates sequi dicta quisquam sed vitae, non fuga, in pariatur quia fugit </p>
        {/* --- art & craft card --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {
            items.sort(function () { return 0.5 - Math.random() }).slice(0, 6).map(item => <AllArtCraftItemsCard
              key={item._id}
              item={item}
            ></AllArtCraftItemsCard>)
          }
        </div>
      </div>
      {/* ------------- art & craft items end --------------- */}
      {/* ------------- subcategory start --------------- */}
      <div className="border-t-2 rounded-[50px] md:rounded-[100px] lg:rounded-[150px] mt-5 md:mt-10 border-info">
        <div className="max-w-screen-xl mx-5 mt-5 md:mt-10 xl:px-5 2xl:px-0 xl:mx-auto">
          < h3 className="font-semibold text-xl md:text-2xl lg:text-3xl text-base-content mx-auto text-center">Art & Craft Categories</h3>
          <p className="my-5 text-center md:w-2/3 mx-auto">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, accusantium impedit voluptates sequi dicta quisquam sed vitae, non fuga, in pariatur quia fugit </p>
          {/* --- art & craft card --- */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {
              subCategory.sort(function () { return 0.5 - Math.random() }).slice(0, 6).map((category, idx) => <AllCategoryCard
                key={idx}
                category={category}
              ></AllCategoryCard>)
            }
          </div>
        </div>
      </div>
      {/* ------------- subcategory start --------------- */}
    </>
  );
};

export default Home;