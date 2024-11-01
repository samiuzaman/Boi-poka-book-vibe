import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoreReadList } from "../../Utility/AddtoDB";
import Readed from "./Readed";
import { IoIosArrowDown } from "react-icons/io";
import { getStoreWishlist } from "../../Utility/WishlistDB";
import WishList from "./WishList";

const ListedBook = () => {
  // Listed Book Section
  const [readLists, setReadList] = useState([]);
  const [wishLists, setWishlist] = useState([]);
  const allBooks = useLoaderData();
  useEffect(() => {
    const storeReadList = getStoreReadList();
    const storeReadListInt = storeReadList.map((id) => parseInt(id));

    const readBookList = allBooks.filter((book) =>
      storeReadListInt.includes(book.bookId)
    );
    setReadList(readBookList);
    // WishListBook Section

    const storeWishList = getStoreWishlist();
    const storeWishListInt = storeWishList.map((id) => parseInt(id));

    const wishlistbooks = allBooks.filter((book) =>
      storeWishListInt.includes(book.bookId)
    );
    setWishlist(wishlistbooks);
    console.log(wishLists);
  }, []);

  const WishListBook = () => {};

  return (
    <div className="w-11/12 md:w-5/6 mx-auto">
      <div className="lg:h-14 pt-2 bg-base-200 text-center rounded-xl">
        <h2 className="text-3xl text-black font-bold mb-8">Books</h2>
      </div>
      <div className="flex justify-center my-6">
        <button className="btn btn-secondary border-none bg-myGreen-0 hover:bg-base-300 hover:text-black">
          Sort By <IoIosArrowDown></IoIosArrowDown>{" "}
        </button>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <div className="mt-6">
            {readLists.map((readlist) => (
              <Readed readlist={readlist}></Readed>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="mt-6">
            {wishLists.map((wishlist) => (
              <WishList wishlist={wishlist}></WishList>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBook;
