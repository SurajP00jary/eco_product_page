import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

import {
  MinusCircleIcon,
  PlusCircleIcon,
  StarIcon,
} from "@heroicons/react/20/solid";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function App() {
  const [count, setCount] = useState(1);

  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };

  const products = [
    {
      name: "",
      price: "",
      imageSrc: "",
      quantity: 0,
    },
  ];

  const addToCart = () => {
    products.push({ imageSrc: "", name: "", price: "", quantity: count });
  };

  useEffect(() => {
    console.log("products is ", products);
  }, [products]);
  
  return (
    <div className="mx-auto my-8">
      <div className="flex mx-auto justify-center">
        <div className="h-[400px] w-[400px]">
          <img src="/himalaya_img.webp" />
        </div>
        <div className="text-start">
          <p className="text-black font-semibold">
            Himalayan Organics Plant Based Vitamin B12 Natural- 120 Veg Capsules
          </p>
          <p>Visit VLADO SKY ENTERPRISE PRIVATE LIMITED Store</p>
          <p className="font-bold text-xl">₹396</p>
          <p className="text-black">
            For Men & Women Gel Based For All Skin Types Applied For: Anti-acne
            & Pimples Comes in Tube
          </p>

          <div className="bg-gray-300">
            <h2 className="text-black font-semibold text-xl">
              Ratings & Reviews
            </h2>
            <div className="ml-1 flex items-center">
              {[0, 1, 2, 3, 4].map((rating) => (
                <StarIcon
                  key={rating}
                  aria-hidden="true"
                  className={classNames(
                    true > rating ? "text-yellow-400" : "text-gray-200",
                    "h-5 w-5 flex-shrink-0"
                  )}
                />
              ))}
            </div>
            <div className="flex space-x-3 p-4">
              <p>Images uploaded by customers </p>
              <div className="w-[100px] h-[100px]">
                <img src="/himalaya_img.webp" />
              </div>
              <div className="w-[100px] h-[100px]">
                <img src="/himalaya_img.webp" />
              </div>
              <div className="w-[100px] h-[100px]">
                <img src="/himalaya_img.webp" />
              </div>
              <div className="w-[100px] h-[100px]">
                <img src="/himalaya_img.webp" />
              </div>
              <div className="w-[100px] h-[100px]">
                <img src="/himalaya_img.webp" />
              </div>
            </div>
          </div>
          <div className="flex p-4">
            <MinusCircleIcon
              onClick={() => decreaseCount()}
              className="text-black h-5 w-5"
            />
            <p>{count}</p>
            <PlusCircleIcon
              onClick={() => increaseCount()}
              className="text-black h-5 w-5"
            />
          </div>
          <button
            onClick={() => addToCart()}
            type="button"
            className="flex justify-center mt-4 w-[400px] rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
