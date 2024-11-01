const getStoreWishlist = () => {
  const storedListStr = localStorage.getItem("wishlist");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addToStoreWishlist = (id) => {
  const storedList = getStoreWishlist();
  if (storedList.includes(id)) {
    console.log(id, "Already exists in the read list");
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("wishlist", storedListStr);
  }
};
export { addToStoreWishlist, getStoreWishlist };
