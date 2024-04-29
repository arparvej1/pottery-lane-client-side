import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';

const MyArtCraftListCard = ({ item, myItems, setMyItems }) => {
  const { _id, itemName, photo, price, rating, stockStatus, customization } = item;
  const { apiURL } = useContext(AuthContext);

  const handleDelete = _id => {
    console.log(_id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`${apiURL}/art-craft/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your item has been deleted.',
                'success'
              )
              const remaining = myItems.filter(i => i._id !== _id);
              setMyItems(remaining);
            }
          })

      }
    })
  }

  return (
    <div>
      <div className='grid md:grid-cols-11 gap-5 border-2 p-5 my-5 rounded-2xl'>
        <div className='md:col-span-4'>
          <img className='rounded-2xl' src={photo} alt={itemName} />
        </div>
        <div className='md:col-span-5 flex flex-col gap-3 justify-center'>
          <h3 className='font-semibold text-2xl'>{itemName}</h3>
          <p>Price: {price}</p>
          <p>Rating: {rating}</p>
          <p>Stock Status: {stockStatus}</p>
          <p>Customization: {customization}</p>
        </div>
        <div className='md:col-span-2 flex md:flex-col gap-5 justify-center'>
          <Link to={`/update-item/${_id}`} className='btn bg-accent text-accent-content'>Update</Link>
          <button onClick={() => handleDelete(_id)} className='btn bg-secondary text-secondary-content'>Delete</button>
          <Link to={`/art-craft/${_id}`} className='btn bg-primary text-primary-content'>Details</Link>
        </div>
      </div>
    </div>
  );
};

MyArtCraftListCard.propTypes = {
  item: PropTypes.object,
  myItems: PropTypes.array,
  setMyItems: PropTypes.func
}

export default MyArtCraftListCard;