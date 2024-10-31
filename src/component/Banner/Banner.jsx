import Books from "../../assets/books.png";

const Banner = () => {
  return (
    <div className="w-11/12 md:w-4/5 mx-auto hero bg-base-200 px-20 py-14 rounded-xl mb-12">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={Books} className="max-w-sm rounded-lg l" />
        <div>
          <h1 className="text-5xl font-bold">
            Books to freshen up your bookshelf
          </h1>
          <p className="py-6">
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
