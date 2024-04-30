import { useContext, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { ToastContainer } from "react-toastify";

const ArtCraftItemsDetails = () => {
  const items = useLoaderData();
  const { itemId } = useParams();
  const item = items.find(i => i._id === itemId);
  const { itemName, photo, subCategory, price, processingTime, rating, shortDescription, customization, stockStatus, userName, userEmail } = item;
  const { loginCheck } = useContext(AuthContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    loginCheck();
  }, []);

  return (
    <div>
      <Helmet>
        <title> {itemName} | PotteryLane </title>
      </Helmet>
      <div>
        {/* ------------------ Start ------------ */}
        <div className='border-2 rounded-2xl my-5 md:my-10'>
          <div className='flex flex-col gap-3 md:gap-5 p-5 md:p-8 lg:p-10'>
            <div>
              <img className='rounded-2xl md:max-w-2xl lg:max-w-4xl mx-auto' src={photo} alt={itemName} />
            </div>
            <h4 className='font-semibold text-2xl'>
              {itemName}
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              <div className="flex gap-2">
                <p className="font-semibold">Sub Category:</p>
                <p>{subCategory}</p>
              </div>
              <div className="flex gap-2">
                <p className="font-semibold">Processing Time:</p>
                <p>{processingTime}</p>
              </div>
              <div className="flex gap-2">
                <p className="font-semibold">Price:</p>
                <p>{price}</p>
              </div>
              <div className="flex gap-2">
                <p className="font-semibold">Rating:</p>
                <p>{rating}</p>
              </div>
              <div className="flex gap-2">
                <p className="font-semibold">Customization:</p>
                <p>{customization}</p>
              </div>
              <div className="flex gap-2">
                <p className="font-semibold">Stock Status:</p>
                <p>{stockStatus}</p>
              </div>
              <div className="flex gap-2">
                <p className="font-semibold">User Name:</p>
                <p>{userName}</p>
              </div>
              <div className="flex gap-2">
                <p className="font-semibold">User Email:</p>
                <p>{userEmail}</p>
              </div>
            </div>
            <p>
              {
                shortDescription
              }
            </p>
            <p>
            </p>
          </div>
        </div>
        {/* ------------ End ------------- */}
      </div>
      <ToastContainer />
    </div>
  );
};

export default ArtCraftItemsDetails;