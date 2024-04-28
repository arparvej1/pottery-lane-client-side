import PropTypes from 'prop-types';

const MyArtCraftListCard = ({ item }) => {
  const { itemName, photo, price, rating, stockStatus, customization } = item;
  return (
    <div>
      <div className='grid md:grid-cols-10 gap-5 border-2 p-5 my-5 rounded-2xl'>
        <div className='md:col-span-4'>
          <img className='rounded-2xl' src={photo} alt={itemName} />
        </div>
        <div className='md:col-span-5 flex flex-col gap-3'>
          <h3 className='font-semibold text-2xl'>{itemName}</h3>
          <p>Price: {price}</p>
          <p>Rating: {rating}</p>
          <p>Stock Status: {stockStatus}</p>
          <p>Customization: {customization}</p>
        </div>
        <div className='md:col-span-1 flex flex-col gap-5'>
          <button className='btn bg-accent text-accent-content'>Update</button>
          <button className='btn bg-secondary text-secondary-content'>Delete</button>
        </div>
      </div>
    </div>
  );
};

MyArtCraftListCard.propTypes = {
  item: PropTypes.object
}

export default MyArtCraftListCard;