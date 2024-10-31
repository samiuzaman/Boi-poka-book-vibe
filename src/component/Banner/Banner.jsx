import Books from "../../assets/books.png";

const Banner = () => {
  return (
    <div className="w-11/12 md:w-4/5 mx-auto hero bg-base-200 lg:px-20 py-14 rounded-xl mb-12">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={Books} className="rounded-lg " />
        <div>
          <h1 className="text-2xl lg:text-5xl font-bold mt-6 mb-4">
            Books to freshen up your bookshelf
          </h1>
          <p className="md:py-6 mb-5">
            Our goal at Book Vibe is to spread the love of reading into the
            digital era. As voracious readers, we recognize the allure of losing
            ourselves in an engrossing narrative, learning new things, or losing
            ourselves in a fantasy world.
          </p>
          <button className="btn bg-[#23BE0A] text-white">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
