import { IoLocationOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoMdContacts } from "react-icons/io";

const WishList = ({ wishlist }) => {
  const {
    image,
    tags,
    bookName,
    author,
    category,
    rating,
    yearOfPublishing,
    publisher,
    totalPages,
  } = wishlist;
  return (
    <div className="lg:flex items-center gap-6 border-2 rounded-xl mb-6 p-5">
      <figure className="w-11/12 lg:w-[230px] lg:h-[230px] bg-base-200 p-6 rounded-2xl">
        <img className="p-6 lg:w-36 lg:h-48  mx-auto" src={image}></img>
      </figure>
      <div className="">
        <h2 className="text-2xl font-PlayfairDisplay font-bold text-black">
          {bookName}
        </h2>
        <p className="text-dark2-0 font-medium my-3">by: {author}</p>

        <div className="lg:flex items-center gap-5 text-left mb-3">
          <p className="text-dark1-0 font-bold flex gap-5 ">
            Tags:
            <span className="flex gap-4">
              {tags.map((tag) => (
                <div className="border-2 bg-base-100 border-myGreen-0 text-myGreen-0 rounded-full px-2">
                  {tag}
                </div>
              ))}
            </span>
          </p>
          <p className="flex items-center">
            {" "}
            <IoLocationOutline></IoLocationOutline> Year of Publishing:{" "}
            {yearOfPublishing}
          </p>
        </div>

        <div className=" lg:flex justify-start border-b-2 pb-2 gap-8">
          <p className="flex">
            {" "}
            <IoMdContacts></IoMdContacts> Publisher: {publisher}{" "}
          </p>
          <p className="flex items-center">
            <IoDocumentTextOutline></IoDocumentTextOutline> Number of Pages:{" "}
            {totalPages}
          </p>
        </div>
        <div className="lg:flex gap-5 mt-3">
          <div className="bg-base-200 text-blue-600 border-2 border-blue-600 rounded-full px-3 py-1">
            Category: {category}
          </div>

          <div className="bg-[#ffad3342] text-[#FFAC33] border-2 border-[#FFAC33] rounded-full px-3 py-1">
            Rating: {rating}
          </div>

          <button className="bg-myGreen-0 text-white 0 rounded-full px-3 py-1">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishList;
