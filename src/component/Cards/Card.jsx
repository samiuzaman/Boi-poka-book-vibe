import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const Card = ({ card }) => {
  const { bookId, image, tags, bookName, author, category, rating } = card;
  return (
    <Link to={`books/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-xl p-5 border-2">
        <figure className="h-64 bg-base-200 mb-6 rounded-2xl">
          <img className="w-32 h-full py-8" src={image} alt="Shoes" />
        </figure>
        <div className="text-left border-b-2 border-dashed pb-4 flex flex-col flex-grow">
          <div className="card-actions mb-4">
            {tags.map((tag) => (
              <div className="border-2 bg-base-100 border-myGreen-0 text-myGreen-0 rounded-full px-2">
                {tag}
              </div>
            ))}
          </div>
          <h2 className="text-2xl mb-4 font-PlayfairDisplay text-dark1-0 font-semibold">
            {bookName}
          </h2>
          <p>By: {author}</p>
        </div>
        <div className="flex justify-between items-center mt-5">
          <span>{category}</span>
          <span className="flex items-center gap-2">
            {rating} <FaRegStar></FaRegStar>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
