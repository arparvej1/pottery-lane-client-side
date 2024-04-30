import { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const UpdateCraftItems = () => {

  const items = useLoaderData();
  const { itemId } = useParams();
  const item = items.find(i => i._id === itemId);
  const { _id, itemName, photo, subCategory, price, processingTime, rating, shortDescription, customization, stockStatus } = item;
  const { user, apiURL, loginCheck } = useContext(AuthContext);
  const navigate = useNavigate();

  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    fetch(`${apiURL}/category`)
      .then(res => res.json())
      .then(data => {
        setCategoryList(data)
      })
  }, [])

  const handleUpdateItem = (e) => {
    e.preventDefault();
    const form = e.target;
    const itemName = form.itemName.value;
    const subCategory = form.subCategory.value;
    const stockStatus = form.stockStatus.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const photo = form.photo.value;
    const customization = form.customization.value;
    const processingTime = form.processingTime.value;
    const shortDescription = form.shortDescription.value;
    const completeItem = { itemName, subCategory, stockStatus, price, rating, photo, customization, processingTime, shortDescription, userUid: user.uid, userEmail: user.email, userName: user.displayName };

    // --------- send server start -----
    fetch(`${apiURL}/art-craft/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(completeItem)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'Item Updated Successfully',
            icon: 'success',
            confirmButtonText: 'Okay'
          })
          navigate(`/art-craft/${_id}`)
        }
      })
    // --------- send server end -----
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    loginCheck();
  }, []);

  return (
    <div>
      <Helmet>
        <title> Add Art & Craft Items | PotteryLane </title>
      </Helmet>
      <div className="max-w-4xl mx-auto mt-5 bg-accent text-accent-content p-5 md:p-8 lg:p-10 rounded-xl">
        <h3 className="text-2xl md:text-3xl text-center mb-6 font-semibold mx-auto">Update Art & Craft Items</h3>
        <form
          onSubmit={handleUpdateItem}
          className="flex flex-col gap-5">
          <div className="gap-5">
            <label className="flex flex-col gap-1 w-full">
              <span>Items Name</span>
              <input type="text" name="itemName" defaultValue={itemName} placeholder="Items Name" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <label className="flex flex-col gap-1 w-full">
              <span>Sub Category Name</span>
              <select name="subCategory" className="select select-bordered w-full">
                {
                  categoryList.map(category => <option
                    key={category._id}
                    value={category.categoryName}
                    selected={subCategory === category.categoryName ? true : false}
                  >{category.categoryName}</option>)
                }
              </select>
            </label>
            <label className="flex flex-col gap-1 w-full">
              <span>Stock Status</span>
              <select name="stockStatus" className="select select-bordered w-full">
                <option value="In stock">In stock</option>
                <option selected={stockStatus === 'Made to Order' ? true : false} value="Made to Order">Made to Order</option>
              </select>
            </label>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <label className="flex flex-col gap-1 w-full">
              <span>Price</span>
              <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full" />
            </label>
            <label className="flex flex-col gap-1 w-full">
              <span>Rating</span>
              <input type="text" name="rating" defaultValue={rating} placeholder="Rating" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="gap-5">
            <label className="flex flex-col gap-1 w-full">
              <span>Photo URL</span>
              <input type="text" name="photo" defaultValue={photo} placeholder="Photo URL" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <label className="flex flex-col gap-1 w-full">
              <span>Customization</span>
              <select name="customization" className="select select-bordered w-full">
                <option value="Yes">Yes</option>
                <option selected={customization === 'No' ? true : false} value="No">No</option>
              </select>
            </label>
            <label className="flex flex-col gap-1 w-full">
              <span>Processing Time</span>
              <input type="text" name="processingTime" defaultValue={processingTime} placeholder="Processing Time" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="gap-5">
            <label className="flex flex-col gap-1 w-full">
              <span>Short Description</span>
              <textarea name="shortDescription" defaultValue={shortDescription} placeholder="Short Description" className="textarea textarea-bordered h-24 w-full" ></textarea>
            </label>
          </div>
          <div className="grid md:grid-cols-2 gap-5 border-[2px] p-4 border-info">
            <label className="flex flex-col gap-1 w-full">
              <span>User Name</span>
              <input type="text" name="userName" value={user?.displayName} placeholder="User Name" className="input input-bordered text-base-content bg-base-200 w-full" />
            </label>
            <label className="flex flex-col gap-1 w-full">
              <span>User Email</span>
              <input type="text" name="userEmail" value={user?.email} placeholder="User Email" className="input input-bordered text-base-content bg-base-200 w-full" />
            </label>
          </div>
          <div className="gap-5">
            <label className="flex flex-col gap-1 w-full">
              <input type="submit" value="Update Item" className="btn bg-primary text-primary-content w-full" />
            </label>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UpdateCraftItems;