import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { Helmet } from "react-helmet-async";

const AddCraftItems = () => {
  const { user, apiURL } = useContext(AuthContext);


  const handleAddItem = (e) => {
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
    const completeItem = { itemName, subCategory, stockStatus, price, rating, photo, customization, processingTime, shortDescription, userId: user.uid, userEmail: user.email }
    console.log(completeItem);
    console.log(user);
    // --------- send server start -----
    fetch(`${apiURL}/add-art-craft`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(completeItem)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
    // --------- send server end -----
  }
  return (
    <div>
      <Helmet>
        <title> Add Art & Craft Items | PotteryLane </title>
      </Helmet>
      <div className="max-w-4xl mx-auto bg-primary-content p-10 rounded-xl">
        <h3 className="text-3xl text-center mb-6 font-semibold mx-auto">Add Art & Craft Items</h3>
        <form
          onSubmit={handleAddItem}
          className="flex flex-col gap-5">
          <div className="gap-5">
            <label className="flex flex-col gap-1 w-full">
              <span>Items Name</span>
              <input type="text" name="itemName" placeholder="Items Name" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <label className="flex flex-col gap-1 w-full">
              <span>Sub Category Name</span>
              <input type="text" name="subCategory" placeholder="Sub Category Name" className="input input-bordered w-full" />
            </label>
            <label className="flex flex-col gap-1 w-full">
              <span>Stock Status</span>
              <input type="text" name="stockStatus" placeholder="Stock Status" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <label className="flex flex-col gap-1 w-full">
              <span>Price</span>
              <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
            </label>
            <label className="flex flex-col gap-1 w-full">
              <span>Rating</span>
              <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="gap-5">
            <label className="flex flex-col gap-1 w-full">
              <span>Photo URL</span>
              <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <label className="flex flex-col gap-1 w-full">
              <span>Customization</span>
              <input type="text" name="customization" placeholder="Customization" className="input input-bordered w-full" />
            </label>
            <label className="flex flex-col gap-1 w-full">
              <span>Processing Time</span>
              <input type="text" name="processingTime" placeholder="Processing Time" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="gap-5">
            <label className="flex flex-col gap-1 w-full">
              <span>Short Description</span>
              <textarea name="shortDescription" placeholder="Short Description" className="textarea textarea-bordered h-24 w-full" ></textarea>
            </label>
          </div>
          <div className="gap-5">
            <label className="flex flex-col gap-1 w-full">
              <input type="submit" value="Add New Item" className="btn bg-secondary text-secondary-content w-full" />
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCraftItems;