import { useEffect, useState } from "react";
import Card from "./Card";

const Cards = () => {
  const [cards, setCard] = useState([]);
  useEffect(() => {
    fetch("booksData.json")
      .then((response) => response.json())
      .then((data) => setCard(data));
  }, []);

  return (
    <div className="w-11/12 md:w-5/6 mx-auto text-center mb-16">
      <h2 className="font-PlayfairDisplay text-2xl text-dark1-0 font-semibold lg:text-4xl mb-8">
        Books
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6">
        {cards.map((card) => (
          <Card key={card.bookId} card={card}></Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;
