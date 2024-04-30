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
import AllArtCraftItemsCard from "../AllCrafts/AllArtCraftItems/AllArtCraftItemsCard";
import AllCategoryCard from "../AllCrafts/AllCategory/AllCategoryCard";
import { ToastContainer } from "react-toastify";

const Home = () => {
  const { apiURL, loginCheck } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  // const subCategory = [...new Set(items.map(val => val.subCategory))]
  const [categoryList, setCategoryList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${apiURL}/art-craft`)
      .then(res => res.json())
      .then(data => {
        setItems(data)
        setLoading(false);
      })

    fetch(`${apiURL}/category`)
      .then(res => res.json())
      .then(data => {
        setCategoryList(data)
      })

  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    loginCheck();
  }, []);

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
                <img src="https://i.ibb.co/5LBgmmn/An-Introduction-to-Pottery.png" className="w-full lg:h-[600px]" />
                <div className='absolute md:top-32 md:left-32 lg:top-48 lg:left-48 text-white bg-[#00000071] p-10 rounded-2xl flex flex-col gap-3   w-2/3'>
                  <h3 className='text-3xl  font-medium '>An Introduction to Pottery</h3>
                  <p className='text-xl font-semibold'>Pottery is an ancient craft, with the earliest historical records of wheel-thrown pottery dating back to 4000 B.C. in Egypt and 3000 B.C. in China.</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full">
              <div className='relative'>
                <img src="https://i.ibb.co/9VqcZpK/Ming-Porcelain.jpg" className="w-full lg:h-[600px]" />
                <div className='absolute md:top-32 md:left-32 lg:top-48 lg:left-48 text-white bg-[#00000071] p-10 rounded-2xl flex flex-col gap-3   w-2/3'>
                  <h3 className='text-3xl  font-medium '>Ming Porcelain</h3>
                  <p className='text-xl font-semibold'>The porcelain of the Ming Dynasty of China (1368-1644 CE) benefitted, as did other arts, from the economic success of the 15th century CE, in particular</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full">
              <div className='relative'>
                <img src="https://i.ibb.co/f4PfsP2/Ceramics-in-Architecture.jpg" className="w-full lg:h-[600px]" />
                <div className='absolute md:top-32 md:left-32 lg:top-48 lg:left-48 text-white bg-[#00000071] p-10 rounded-2xl flex flex-col gap-3   w-2/3'>
                  <h3 className='text-3xl  font-medium '>Ceramics in Architecture</h3>
                  <p className='text-xl font-semibold'>Ceramics are hard and brittle materials that are generally used to create pottery and tiles. Ceramics in architecture have been in use across various eras from the colourful Art Nouveau to the eclectic Art Deco.</p>
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
        <p className="my-5 text-center md:w-2/3 mx-auto">PotteryLane features clay-made pottery, stoneware, porcelain, terra cotta, ceramics & architectural pieces, and home decor pottery, meticulously crafted by skilled artisans for elegant home accents.</p>
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
          <p className="my-5 text-center md:w-2/3 mx-auto">PotteryLane showcases a diverse range of art and craft categories, including ceramics, pottery, painting, sculpture, textile art, and woodworking, each offering unique handcrafted items to adorn your living spaces with elegance and charm.</p>
          {/* --- art & craft card --- */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {
              categoryList.sort(function () { return 0.5 - Math.random() }).slice(0, 6).map((category, idx) => <AllCategoryCard
                key={idx}
                category={category}
              ></AllCategoryCard>)
            }
          </div>
        </div>
        {
          loading &&
          <div className="flex justify-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        }
      </div>
      {/* ------------- subcategory start --------------- */}
      <ToastContainer />
    </>
  );
};

export default Home;