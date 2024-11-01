import { useLoaderData, useParams } from "react-router-dom";
import { addToStoreReadList } from "../../Utility/AddtoDB";
import { addToStoreWishlist } from "../../Utility/WishlistDB";

const BookDetails = () => {
  const { bookId } = useParams();
  const carentId = parseInt(bookId);
  const data = useLoaderData();
  const bookdetail = data.find((book) => book.bookId === carentId);
  const {
    image,
    tags,
    bookName,
    author,
    category,
    rating,
    review,
    yearOfPublishing,
    publisher,
    totalPages,
  } = bookdetail;

  const handleMarkAsRead = (id) => {
    addToStoreReadList(id);
  };

  const handleWishlist = (id) => {
    addToStoreWishlist(id)
  };

  return (
    <div className="w-11/12 md:w-5/6 mx-auto lg:flex items-center py-10">
      <figure className="w-full lg:w-1/2 h-[540px]">
        <img className="w-[380px] mx-auto h-full" src={image}></img>
      </figure>
      <div className="w-full lg:w-1/2">
        <h2 className="text-3xl lg:text-4xl font-PlayfairDisplay font-bold text-black mt-10 lg:mt-0">
          {bookName}
        </h2>
        <p className="text-dark2-0 font-medium mt-4">by: {author}</p>
        <div className="w-full divider"></div>
        <p>{category}</p>
        <div className="w-full divider"></div>
        <p>
          <span className="text-dark1-0 font-bold text-justify">Review:</span>
          {review}
        </p>
        <p className="text-dark1-0 font-bold flex gap-5 mt-5">
          Tags:
          <span className="flex gap-4">
            {tags.map((tag) => (
              <div className="border-2 bg-base-100 border-myGreen-0 text-myGreen-0 rounded-full px-2">
                {tag}
              </div>
            ))}
          </span>
        </p>
        <div className="w-full divider "></div>
        <p className="mb-3">Number of Pages: {totalPages} </p>
        <p className="mb-3">Publisher: {publisher} </p>
        <p className="mb-3">Year of Publishing: {yearOfPublishing}</p>
        <p>Rating: {rating} </p>
        <div className="flex gap-5 mt-8">
          <button
            onClick={() => handleMarkAsRead(bookId)}
            className="btn btn-outline border-dark2-0"
          >
            Mark as Read
          </button>
          <button
            onClick={() => handleWishlist(bookId)}
            className="btn btn-info text-white"
          >
            {" "}
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
