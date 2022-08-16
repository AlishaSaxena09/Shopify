import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div className="py-5 flex items-center  justify-around">
      <div className=" w-1/2">
        <p className="text-xl text-gray-600 my-4">
          Discounted prices and online exclusive prices
        </p>
        <h1 className="text-4xl font-bold uppercase my-4">
          Fashion Your Way !
        </h1>
        <p className="text-sm text-gray-400">
          Make fashion your first choice and buy the most trending outfits at
          the most reasonable prices. Shop, add and create your new looks
          everyday.
        </p>
      </div>
      <div className=" w-2/5">
        <Link to="/products">
          <img alt="main" src="/images/img3.jpeg"></img>
        </Link>
      </div>
    </div>
  );
}
